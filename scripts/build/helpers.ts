import path, { resolve } from "path";
import { readdir, readFile, writeFile } from "fs/promises";
import config from "../config.json" with { type: "json" };

export async function fixImportsInFile(filePath: string) {
	const content = await readFile(filePath, "utf8");

	// Regex to match import/export statements
	const importExportRegex =
		/(import\s+(?:[\s\S]+?)\s+from\s+|export\s+\*\s+from\s+|export\s+\{[\s\S]+?\}\s+from\s+)(['"])([^'"]+)(['"])/g;

	const fixedStaticImports = content.replace(
		importExportRegex,
		(match, prefix, quote1, importPath, quote2) => {
			// Handle aliases like @app, @services/...
			for (const [alias, targetPath] of Object.entries(config.build.aliasMap)) {
				if (importPath.startsWith(alias)) {
				  	const subPath = importPath.slice(alias.length); // e.g. "email/send"
					const absoluteTarget = resolve("dist", targetPath, subPath);
					let relativePath = path.relative(path.dirname(filePath), absoluteTarget);

				  	// Normalize to forward slashes for import
					let normalized = relativePath.replace(/\\/g, "/");

				 	// Ensure it's a relative path
					if (!normalized.startsWith(".")) normalized = "./" + normalized;

					// Remove .ts if present (to avoid .ts.js)
					if (normalized.endsWith(".ts")) {
						normalized = normalized.slice(0, -3);
					}

				  	// Add .js if no extension present
					if (!path.extname(normalized)) {
						normalized += ".js";
					}

					return `${prefix}${quote1}${normalized}${quote2}`;
				}
			}

			// Handle relative imports (your existing logic)
			if (
				importPath.includes(".") &&
				(!importPath.endsWith(".js") || importPath.endsWith(".ts"))
			) {
				let newImportPath = importPath;
				if (importPath.endsWith(".ts")) {
					newImportPath = importPath.replace(/\.ts$/, ".js");
				} else if (!path.extname(importPath)) {
					newImportPath = importPath + ".js";
				}
				return `${prefix}${quote1}${newImportPath}${quote2}`;
			}

			return match;
		}
	);

	const fixed = fixedStaticImports.replaceAll(".ts", ".js")

	if (fixed !== content) {
		await writeFile(filePath, fixed, "utf8");
	}
}

export async function walkAndFix(dir: string) {
	const entries = await readdir(dir, { withFileTypes: true });
	for (const entry of entries) {
		const fullPath = path.resolve(dir, entry.name);
		if (entry.isDirectory()) {
			await walkAndFix(fullPath);
		} else if (entry.isFile() && fullPath.endsWith(".js")) {
			await fixImportsInFile(fullPath);
		}
	}
}
