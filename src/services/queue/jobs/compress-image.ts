import sharp from "sharp";
import path from "path";

import Task from "../task.ts";

const compressionConfig = {
	jpeg: { quality: 80 },
	webp: { quality: 80 },
	png: { compressionLevel: 8 },
};

export default async function compressImageExecutor(task: Task) {
	try {
		const data = task.data;

		// Validate required data
		if (!data.image) {
			throw new Error("Image model is required in task data");
		}

		if (!data.sizes) {
			throw new Error("sizes[] is required in task data");
		}

		const filepath = data.image.filepath;
		const filename = data.image.filename;
		const outputDir = data.image.directory;
		const sizes = data.sizes;
		const inputPath = path.join(process.cwd(), filepath);
		const imageToCompress = sharp(inputPath);
		const { format } = await imageToCompress.metadata();

		const progressRate = 100 / sizes.length;

		for (const size of sizes) {
			const outputPath = path.join(
				outputDir,
				filename.split(".")[0] + `-${size.width}x${size.height}` + ".jpg"
			);

			// Check if format is supported and save the processed image
			if (format && format in compressionConfig) {
				await imageToCompress[format as keyof typeof compressionConfig](
					compressionConfig[format as keyof typeof compressionConfig]
				)
					.resize(size.width, size.height)
					.toFile(outputPath);
				
				task.updateProgress(task.progress + progressRate);
			} else {
				// For unsupported formats, just resize without format-specific options
				console.log(
					`Unsupported format: ${format}, processing without format-specific options`
				);

				await imageToCompress
					.resize(size.width, size.height)
					.toFile(outputPath);

				task.updateProgress(task.progress + progressRate);
			}
		}

		return {
			image: task.data.image,
			sizes,
			processed: true,
			timestamp: new Date(),
		};
	} catch (error) {
		console.error("Image compression failed:", error);
		throw error;
	}
}
