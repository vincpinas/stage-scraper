import inquirer from "inquirer";
import fs from "fs";
import path from "path";

async function main() {
	const { name, description } = await inquirer.prompt([
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
	]);

	const className =
		name
			.split(/[-_ ]+/)
			.map((w: string) => w.charAt(0).toUpperCase() + w.slice(1))
			.join("") + "Task";

	const fileName = `${name}.ts`;
	const filePath = path.join(process.cwd(), "src", "tasks", fileName);

	const template = `import { PrismaClient } from "@db/prisma/index.js";
import Task from "@services/queue/task.ts";
import TaskExecutor from "@services/queue/task-executor.ts";
import { getFileParts } from "@lib/util.ts";
import type { TaskResult } from "@types"

export interface ${className}Data {
  // Define your task data here
}

export interface ${className}Result {
  // Define your task result here
}

/**
 * ${description}
 */
export default class ${className} extends TaskExecutor<${className}Data, ${className}Result> {
  constructor() {
    super(getFileParts(import.meta.filename).nameWithoutExtension);
  }

  override async exec(
    task: Task<${className}Data>
  ): Promise<TaskResult<${className}Result>> {
    // Implement your task logic here
    return { processed: true };
  }
  
  async saveResult(
        task: Task<${className}Data>,
        result: TaskResult<${className}Result>,
        db: PrismaClient
  ): Promise<void> {
    // Implement saving the result of the "${name}" task to the database
  }


  // NOTE: The following two functions are completely optional and can be removed if unused.
  // ===================
  override async onFailure(
    task: Task<${className}Data>,
    error: unknown,
    result: TaskResult<${className}Result>,
    db: PrismaClient
  ) {
    // Optional: implement completion logic
  }

  override async onComplete(
    task: Task<${className}Data>,
    result: TaskResult<${className}Result>,
    db: PrismaClient
  ) {
    // Optional: implement completion logic
  }

}
`;

	fs.writeFileSync(filePath, template, { encoding: "utf8" });
	console.log(`Task file created: ${filePath}`);

	// === Update queue.d.ts ===
	const queueTypesPath = path.join(process.cwd(), "src", "types", "queue.d.ts");
	const queueTypes = fs.readFileSync(queueTypesPath, "utf8");

	const dataTypeName = `${className}Data`;
	const importLine = `import type { ${dataTypeName} } from "@tasks/${name}.ts";`;

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
			updated = updated.slice(0, insertPos) + importLine + "\n" + updated.slice(insertPos);
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

main();
