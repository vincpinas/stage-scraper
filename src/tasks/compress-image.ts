import fs from "fs";
import path from "path";
import sharp from "sharp";

import { PrismaClient } from "@db/prisma/index.js";
import FileModel from "@models/file.ts";
import Task from "@services/queue/task.ts";

import type { CompressImageTaskData, CompressImageTaskResult, TaskResult } from "@types";

const compressionConfig = {
	jpeg: { quality: 80 },
	webp: { quality: 80 },
	png: { compressionLevel: 8 },
};

async function compressImageTask(task: Task<CompressImageTaskData>): Promise<TaskResult<CompressImageTaskResult>> {
	try {
		const image = task.data.image;
		const sizes = task.data.sizes;

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
			const newUid = image.uid + `-${size.width}x${size.height}`;
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
				new FileModel({
					userId: image.userId,
					type: image.type,
					mimetype: image.mimetype,
					uid: newUid,
					filename: newFilename,
					filepath: outputPath,
					publicpath: image.publicpath.replace(image.filename, newFilename),
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

async function onComplete(db: PrismaClient, task: Task<CompressImageTaskData>, result: TaskResult<CompressImageTaskResult>) {
	if(!task.data) return;

	const image = task.data.image;

	if(image && image.type === "avatar") {
		await fs.promises.unlink(image.filepath);
	}
}

export default {
	exec: compressImageTask,
	onComplete
};
