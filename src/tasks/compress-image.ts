import fs from "fs";
import path from "path";
import sharp from "sharp";

import { PrismaClient } from "@db/prisma/index.js";
import FileModel from "@models/file.ts";
import Task from "@services/queue/task.ts";

import TaskExecutor from "@services/queue/task-executor.ts";
import { getFileParts } from "@lib/util.ts";
import { safeUpsert } from "@db/helpers.ts";
import File from "@models/file.ts";

import type { TaskResult } from "@types";

export interface CompressImageTaskData {
	image: File;
	sizes: { width: number; height: number }[];
}

export interface CompressImageTaskResult {
	files?: File[];
}

const compressionConfig = {
	jpeg: { quality: 80 },
	webp: { quality: 80 },
	png: { compressionLevel: 8 },
};

export default class compressImageTask extends TaskExecutor {
	constructor() {
		super(getFileParts(import.meta.filename).nameWithoutExtension);
	}

	override async exec(
		task: Task<CompressImageTaskData>
	): Promise<TaskResult<CompressImageTaskResult>> {
		try {
			const image = task.data.image;
			const sizes = task.data.sizes;

			// Validate required data
			if (!image) {
				task.addError(new Error("Image model is required in task data"));

				return {
					processed: false,
				};
			}

			if (!sizes) {
				task.addError(new Error("sizes[] is required in task data"));

				return {
					processed: false,
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

	override async onComplete(
		task: Task<CompressImageTaskData>,
	) {
		const image = task.data.image;

		if (image && image.type === "avatar") {
			await fs.promises.unlink(image.filepath);
		}
	}

	override async saveResult(
		task: Task<CompressImageTaskData>,
		result: TaskResult<CompressImageTaskResult>,
		db: PrismaClient
	): Promise<void> {
		const files = result && (result.files as File[]);
		if (!files) return;
		for (const file of files) {
			const insert = {
				uid: file.uid,
				type: file.type,
				mimetype: file.mimetype,
				size: file.size,
				filename: file.filename,
				filepath: file.filepath,
				publicpath: file.publicpath,
				user_id: file.userId,
			};

			await safeUpsert(db.uploads, { uid: file.uid }, insert);
		}
	}
}
