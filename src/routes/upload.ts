import express from "express";
import multer from "multer";
import fs from "fs";
import path from "path";

import { randomUUID } from "crypto";
import Image from "@/models/image.ts";

import useValidation from "@/middleware/validation/index.ts";
import useQueue from "@/middleware/queue.ts";
import QueueTask from "@/services/queue/task.ts";

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
	useQueue({
		runNow: true,
	}),
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
		const queue = req.appRef.getQueue();

		// Get current user data.
		const user = await db.users.getByName(username);

		if (!user) return;

		const uuid = randomUUID();
		const filename = `${uuid}.jpg`;
		const directory = `./uploads/avatars/${username}`;
		const filepath = `${directory}/${filename}`;
		const publicPath = `/avatars/${username}/${filename}`;
		
		// Ensure the directory exists
		if (!fs.existsSync(directory)) fs.mkdirSync(directory, { recursive: true });
		
		// Clear the entire avatar directory before saving the new avatar
		try {
			const files = fs.readdirSync(directory);
			for (const file of files) {
				const filePath = path.join(directory, file);
				if (fs.lstatSync(filePath).isFile()) {
					fs.unlinkSync(filePath);
				}
			}
		} catch (err) {
			console.error("Error clearing avatar directory:", err);
		}
		
		// You can access the file buffer with: req.file
		// We just take the buffer, write it to a file and then save that filePath to the user.
		fs.writeFileSync(filepath, req.file.buffer);

		const avatar = new Image({
			uuid,
			filename,
			filepath,
			directory,
			publicPath,
		});

		const changeUserAvatar = await db.users.update(username, [
			{
				field: "avatar",
				value: avatar.json(),
			},
		]);

		response.combine(changeUserAvatar);
		response.setMessage("User avatar successfully updated");

		queue.add(
			new QueueTask({
				name: "Compress user avatar",
				type: "compress-image",
				description: "Compress uploaded user avatar",
				priority: 4,
				data: {
					image: avatar,
					sizes: [
						{ width: 400, height: 400 },
						{ width: 250, height: 250 },
					],
				},
				userId: user.id
			})
		);

		next();
	}
);

export default router;
