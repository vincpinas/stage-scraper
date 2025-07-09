import { exec } from 'child_process';
import { promisify } from 'util';
import { build as esbuild } from "esbuild";
import { resolve } from "path";


export async function buildWithTSC() {
  const execAsync = promisify(exec);
  
  try {
    // Use TypeScript compiler to build the project
    // Exclude test files by not including them in the compilation
    await execAsync('npx tsc --project tsconfig.build.json');
    
    console.log('✅ Build completed successfully!');
    console.log('📁 Output directory: dist/');
  } catch (error) {
    console.error('❌ Build failed:', error);
    process.exit(1);
  }
}

export async function buildWithES() {
	try {
		await esbuild({
			entryPoints: ["index.ts"],
			bundle: true,
			platform: "node",
			target: "node18",
			format: "esm",
			outdir: "dist",
			sourcemap: true,
			minify: false,
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
				"@": resolve("./src"),
				"@auth": resolve("./src/auth"),
				"@db": resolve("./src/db/index.ts"),
				"@db/*": resolve("./src/db"),
				"@middleware": resolve("./src/middleware"),
				"@routes": resolve("./src/routes"),
				"@tests": resolve("./src/tests"),
				"@webscraper": resolve("./src/webscraper"),
				"@types": resolve("./src/types.ts"),
				"@httpResponse": resolve("./src/HttpResponse.ts"),
			},
		});

		console.log("✅ Build completed successfully!");
	} catch (error) {
		console.error("❌ Build failed:", error);
		process.exit(1);
	}
}
