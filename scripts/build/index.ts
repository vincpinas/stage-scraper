import { exec } from "child_process";
import { promisify } from "util";
import { resolve, join } from "path";
import { cp, rm, unlink } from "fs/promises";
import { walkAndFix } from "./helpers.ts";
import config from "../config.json" with { type: "json" };

/**
 * Compiles the TypeScript project using the TypeScript compiler (tsc).
 * This function executes `tsc` with a specific build configuration.
 */
export async function buildWithTSC() {
	const distPath = resolve("dist");
	const execAsync = promisify(exec);

    console.log("🧹Clearing out dist dir");
	try {
		await cp(distPath, distPath, { recursive: true });
		await rm(distPath, { recursive: true, force: true });
		console.log("✅ Cleared dist directory");
	} catch (err) {
		// If dist doesn't exist, ignore error
	}

	console.log("✅ Copying generated prisma files into distributable");
	await cp(resolve("src/db/prisma"), resolve("dist/src/db/prisma"), {
        recursive: true,
	});

    console.log("⏳ Building with tsc...");
    
	try {
		await execAsync("npx tsc --project tsconfig.build.json");

		console.log("✅ Build completed successfully!");
		console.log("📁 Output directory: dist/");
	} catch (error) {
		// console.error("❌ Build failed:", error);
	}

    // Remove files unnecessary for production from dist using build config
    for (const folder of config.build.exclude) {
        for (const file of folder.files) {
            try {
                await unlink(join(folder.dir, file));
                console.log(`🗑️ Removed unnecessary file: ${file}`);
            } catch (err) {
                // Ignore if file does not exist
            }
        }
    }

	// --- Post-process: Fix import extensions (change from .ts to .js) in dist ---
	console.log("🔍 Fixing import extensions in dist/...");
	await walkAndFix(distPath);

	process.exit();
}

buildWithTSC();