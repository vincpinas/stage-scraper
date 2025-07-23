import fs from "fs";
import path from "path";
import Generator, { ParamSchema } from "../index.ts";

class TaskGenerator extends Generator {
	constructor() {
		super({
			type: "task",
			outputDir: "src/tasks",
            templatePath: path.join(import.meta.dirname, "template.yml")
		});
	}

	override defineRequireSchema(): ParamSchema[] {
		return [
			{
				type: "input",
				name: "name",
				message: "Task name (e.g., compress-image):",
				validate: (input: string) => !!input || "Name is required",
			},
			{
				type: "input",
				name: "description",
				message: "Task description:",
			},
		];
	}

	override async onComplete() {
		// === Update queue.d.ts file with new imports and union types ===
		const queueTypesPath = path.join(
			process.cwd(),
			"src",
			"types",
			"queue.d.ts"
		);
		const queueTypes = fs.readFileSync(queueTypesPath, "utf8");
		const dataTypeName = `${this.className}Data`;
		const importLine = `import type { ${dataTypeName} } from "@tasks/${this.name}.ts";`;

		let updated = queueTypes;

		// Add import after the last existing Data import if not present
		if (!queueTypes.includes(importLine)) {
			const importRegex = /(import type \{ [^}]*Data \} from [^\n]*;\n?)/g;
			let lastMatch;
			let match;
			while ((match = importRegex.exec(updated)) !== null) {
				lastMatch = match;
			}
			if (lastMatch) {
				const insertPos = lastMatch.index + lastMatch[0].length;
				updated =
					updated.slice(0, insertPos) +
					importLine +
					"\n" +
					updated.slice(insertPos);
			} else {
				// If no Data import found, just add at the top
				updated = importLine + "\n" + updated;
			}
		}

		// Update TaskData union
		const unionRegex = /export type TaskData = ([^;]+);/;
		const match = updated.match(unionRegex);
		if (match && !match[1].includes(dataTypeName)) {
			const before = match[0];
			const after = `export type TaskData = ${match[1].trim()} | ${dataTypeName};`;
			updated = updated.replace(before, after);
		}

		fs.writeFileSync(queueTypesPath, updated, { encoding: "utf8" });
		console.log(`Updated TaskData union in: ${queueTypesPath}`);
	}
}

await new TaskGenerator().start();
