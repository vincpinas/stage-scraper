import express from "express";
import multer from "multer";
import fs from "fs";

import { randomUUID } from "crypto";
import File from "@models/file.ts";

import useValidation from "@middleware/validation/index.ts";
import useQueue from "@middleware/queue.ts";
import QueueTask from "@services/queue/task.ts";
import { clearDir, ensureDir } from "@lib/util.ts";
import { waitForDbRecord } from "@db/helpers.ts";

// Configuration
// ================================

const upload = multer({
	storage: multer.memoryStorage(), // Store files in memory
	limits: {
		fileSize: 5 * 1024 * 1024, // 5MB limit
	},
});

const router = express.Router();

// Upload avatar
// ================================

router.post(
	"/avatar",
	upload.single("avatar"),
	useQueue(),
	...useValidation({
		requiresLogin: true,
		attachment: {
			maxSize: 0.2 * 1024 * 1024, // 5MB limit
		},
	}),
	async (req, res, next) => {
		const username = req.session.username;

		if (!req.file || !username) return next();

		const response = req.httpResponse;
		const db = req.appRef.getDB();
		const worker = req.appRef.getWorker();
		const queue = req.appRef.getQueue();

		// Get current user data.
		const user = await db.users.findUnique({
			where: {
				username: username,
			},
		});

		if (!user) return;

		const uid = randomUUID();
		const filename = `${uid}.jpg`;
		const directory = `uploads/avatars/${username}`;
		const filepath = `${directory}/${filename}`;
		const publicpath = `/avatars/${username}/${filename}`;

		await ensureDir(directory);

		const oldImages = await fs.promises.readdir(directory);

		if(oldImages.length > 0) {
			// Remove old uploads from db before saving the new avatar.
			for (const image of oldImages) {
				const upload = await db.uploads.findFirst({ where: { filename: image } });
				if (upload) {
					await db.uploads.delete({ where: { id: upload.id } });
				}
			}

			// Clear the entire avatar directory before saving the new avatar.
			await clearDir(directory);
		}

		// You can access the file buffer with: req.file
		// We just take the buffer, write it to a file and then save that filePath to the user.
		await fs.promises.writeFile(filepath, req.file.buffer);

		const avatar = new File({
			uid,
			userId: user.id,
			type: "avatar",
			filename,
			filepath,
			publicpath,
			mimetype: req.file.mimetype,
			size: req.file.size,
		});

		const sizes = [
			{ width: 400, height: 400 },
			{ width: 250, height: 250 },
		];

		const smallestSize = sizes[sizes.length - 1];
		const smallestUid =
			avatar.uid + `-${smallestSize.width}x${smallestSize.height}`;

		queue.add(
			new QueueTask({
				name: "Compress user avatar",
				type: "compress-image",
				description: "Compress uploaded user avatar",
				data: {
					image: avatar,
					sizes: sizes,
				},
				userId: user.id,
			})
		);

		waitForDbRecord(
			db.uploads,
			{ where: { uid: smallestUid } },
			10, // maxAttempts
			300 // delayMs
		).then(async (record) => {
			if (!record) {
				console.error(
					`Avatar with uid ${smallestUid} not found in DB after waiting.`
				);
				return;
			}

			const updatedUser = await db.users.update({
				where: {
					id: record.user_id,
				},
				data: {
					avatarId: record.id,
				},
			});

			if (updatedUser) {
				response.setUser(updatedUser);
			}
		});

		response.setMessage("Compressing and updating user avatar");

		next();
	}
);

export default router;
