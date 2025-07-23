import fs from "fs";
import path from "path";

// Paths
const queueTypesPath = path.join(process.cwd(), "src", "types", "queue.d.ts");
const tasksDir = path.join(process.cwd(), "src", "tasks");

// Read queue.d.ts
let queueTypes = fs.readFileSync(queueTypesPath, "utf8");

// Find all Data imports
const importRegex = /import type \{ (\w+Data) \} from "@tasks\/([^"]+)\.ts";\n?/g;
let match;
const importsToRemove: string[] = [];
const dataTypesToRemove: string[] = [];

while ((match = importRegex.exec(queueTypes)) !== null) {
	const [importLine, dataType, fileName] = match;
	const taskFilePath = path.join(tasksDir, `${fileName}.ts`);
	if (!fs.existsSync(taskFilePath)) {
		importsToRemove.push(importLine);
		dataTypesToRemove.push(dataType);
	}
}

// Remove missing imports
for (const importLine of importsToRemove) {
	queueTypes = queueTypes.replace(importLine, "");
}

// Remove missing types from TaskData union
if (dataTypesToRemove.length > 0) {
	const unionRegex = /export type TaskData = ([^;]+);/;
	const unionMatch = queueTypes.match(unionRegex);
	if (unionMatch) {
		let union = unionMatch[1];
		for (const dataType of dataTypesToRemove) {
			// Remove with or without leading/trailing pipes and spaces
			const pipeRegex = new RegExp(`\\s*\\|?\\s*${dataType}\\s*\\|?\\s*`, "g");
			union = union.replace(pipeRegex, " | ");
		}
		// Clean up extra pipes and spaces
		union = union.replace(/\s*\|\s*/g, " | ").replace(/^\s*\|\s*|\s*\|\s*$/g, "").trim();
		queueTypes = queueTypes.replace(unionRegex, `export type TaskData = ${union};`);
	}
}

// Write back to file
fs.writeFileSync(queueTypesPath, queueTypes, { encoding: "utf8" });
console.log("Cleaned up TaskData union and imports in queue.d.ts.");
