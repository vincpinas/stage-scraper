import { exec } from "child_process";
import { promisify } from "util";
import { build as esbuild } from "esbuild";
import { resolve } from "path";

/**
 * Compiles the TypeScript project using the TypeScript compiler (tsc).
 * This function executes `tsc` with a specific build configuration.
 */
export async function buildWithTSC() {
	const execAsync = promisify(exec);

	try {
		console.log("⏳ Building with tsc...");
		await execAsync("npx tsc --project tsconfig.build.json");
		console.log("✅ Build completed successfully!");
		console.log("📁 Output directory: dist/");
	} catch (error) {
		console.error("❌ Build failed:", error);
		process.exit(1);
	}
}

/**
 * Bundles the project using esbuild.
 * This function configures esbuild to handle entry points, output format,
 * external dependencies, and path aliases.
 */
export async function buildWithES() {
	try {
		console.log("⏳ Building with esbuild...");
		await esbuild({
			entryPoints: ["index.ts"],
			bundle: true,
			platform: "node",
			target: "node18",
			format: "esm",
			outdir: "dist",
			sourcemap: true,
			minify: false,
			// External packages that should not be bundled
			external: [
				"express",
				"express-session",
				"multer",
				"mysql2",
				"nodemailer",
				"puppeteer",
				"cors",
				"path",
			],
			alias: {
				"@/": resolve("./src"),
				"@/db": resolve("./src/db/index.ts"),
				"@/lib": resolve("./src/lib"),
				"@/middleware": resolve("./src/middleware"),
				"@/models": resolve("./src/models"),
				"@/routes": resolve("./src/routes"),
				"@/scrapers": resolve("./src/scrapers"),
				"@/services": resolve("./src/services"),
				"@/tasks": resolve("./src/tasks"),
				"@/types": resolve("./src/types"),
			},
		});

		console.log("✅ esbuild build completed successfully!");
	} catch (error) {
		console.error("❌ esbuild build failed:", error);
		process.exit(1);
	}
}
