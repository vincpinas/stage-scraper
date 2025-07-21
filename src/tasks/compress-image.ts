import sharp from "sharp";
import path from "path";

import Task from "@services/queue/task.ts";
import { TaskResult } from "@/types/queue.js";
import File from "@/models/file.ts";
import { PrismaClient } from "@/db/prisma/index.js";
import fs from "fs";
import { waitForDbRecord } from "@/db/helpers.ts";

const compressionConfig = {
	jpeg: { quality: 80 },
	webp: { quality: 80 },
	png: { compressionLevel: 8 },
};

async function compressImageTask(task: Task): Promise<TaskResult> {
	try {
		const data = task.data;
		const image: File = data.image;
		const sizes = data.sizes;

		// Validate required data
		if (!image) {
			task.addError(new Error("Image model is required in task data"));

			return {
				processed: false,
				files: [],
			};
		}

		if (!sizes) {
			task.addError(new Error("sizes[] is required in task data"));

			return {
				processed: false,
				files: [],
			};
		}

		const progressRate = 100 / sizes.length;

		const inputPath = path.join(process.cwd(), image.filepath);
		const imageToCompress = sharp(inputPath);
		const { format } = await imageToCompress.metadata();

		const compressedFiles = [];

		for (const size of sizes) {
			const newUid = data.image.uid + `-${size.width}x${size.height}`;
			const newFilename = newUid + ".jpg";
			const outputPath = path.join(image.directory, newFilename);
			let compressedSize = 0;

			// Check if format is supported and save the processed image
			if (format && format in compressionConfig) {
				const compressed = await imageToCompress[
					format as keyof typeof compressionConfig
				](compressionConfig[format as keyof typeof compressionConfig])
					.resize(size.width, size.height)
					.toFile(outputPath);

				compressedSize = compressed.size;
			} else {
				// For unsupported formats, just resize without format-specific options
				console.log(
					`Unsupported format: ${format}, processing without format-specific options`
				);

				const compressed = await imageToCompress
					.resize(size.width, size.height)
					.toFile(outputPath);

				compressedSize = compressed.size;
			}

			task.updateProgress(task.progress + progressRate);

			compressedFiles.push(
				new File({
					userId: data.image.userId,
					type: data.image.type,
					mimetype: data.image.mimetype,
					uid: newUid,
					filename: newFilename,
					filepath: outputPath,
					publicpath: data.image.publicpath.replace(image.filename, newFilename),
					size: compressedSize,
				})
			);
		}

		return {
			processed: true,
			files: compressedFiles,
		};
	} catch (error) {
		task.addError(error instanceof Error ? error : new Error(String(error)));

		throw error;
	}
}

async function onComplete(db: PrismaClient, task: Task, result: TaskResult) {
	const image: File | undefined = task.data.image;

	if(image && image.type === "avatar") {
		await fs.promises.unlink(image.filepath);
	}
}

export default {
	exec: compressImageTask,
	onComplete
};
