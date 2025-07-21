import type { TaskOptions } from "@types";

import Queue, { Task } from "./index.ts";

import fs from "fs";
import path from "path";
import { PrismaClient } from "@db/prisma/index.js";
import { getFileParts } from "@lib/util.ts";

// Create a queue with 1 concurrent task (can be increased if desired)
const queue = new Queue(1);
const db = new PrismaClient();

const executorDir = path.join(process.cwd(), "src", "tasks");
const executorFiles = (await fs.promises.readdir(executorDir)).filter((file) =>
	file.endsWith(".ts")
);

// Register all executors from src/tasks.
executorFiles.forEach(async file => {
	// The filename minus the extension automatically gets used as the task type.
	const name = getFileParts(file).nameWithoutExtension;
	const executor = await import(path.join(executorDir, file));
	
	queue.registerExecutor(name, executor.default.exec, executor.default.onComplete);
});

const sendProcessResponse = (task: Task | null, error: unknown, result: unknown) => {
	process.send?.({ 
		task: task,
		error: error instanceof Error ? error.message : String(error),
		result
	});
}

// Listen for tasks from the parent process
process.on("message", async (taskData) => {
	let result = null;

	try {
		// Reconstruct a Task instance from plain object
		const task = new Task<any>(taskData as TaskOptions<any>);

		// Register the task and immediately process it using the registered executor
		const executor = queue['taskExecutors'].get(task.type);
		const onComplete = queue['taskCompletionExecutors'].get(task.type);
		
		if (executor) {
			try {
				result = await task.execute(executor);

				if(onComplete) await onComplete(db, task, result);
			} catch (error) {
				console.error(`Task ${task.uid} failed:`, error);
				task.status = "failed";
				task.error = error instanceof Error ? error : new Error(String(error));
				
				// Send failure status back to parent
				sendProcessResponse(task, error, result);
			}

			// Send result/status back to parent process
			sendProcessResponse(task, null, result);
		} else {
			sendProcessResponse(task, `No executor for type: ${task.type}`, result)
		}
	} catch (err) {
		sendProcessResponse(null, err, result);
	}
});
