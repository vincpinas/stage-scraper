import { PrismaClient } from "@db/prisma/index.js";
import Queue, { Task } from "./index.ts";

import type { TaskData, TaskOptions } from "@types";

process.env.WORKER = "true";

// Create a queue with 1 concurrent task (can be increased if desired)
const queue = new Queue(1);
const db = new PrismaClient();

const sendProcessResponse = (
	task: Task | null,
	error: unknown,
	result: unknown
) => {
	process.send?.({
		task: task,
		error: error instanceof Error ? error.message : String(error),
		result,
	});
};

await queue["taskExecutors"].initialize();

// Listen for tasks from the parent process
process.on("message", async (taskData) => {
	let result = null;

	try {
		// Reconstruct a Task instance from plain object
		const task = new Task<TaskData>(taskData as TaskOptions<any>);

		// Register the task and immediately process it using the registered executor
		const executor = queue["taskExecutors"].getExecutor(task.type);

		if (executor) {
			try {
				result = await task.execute(executor.exec);

				await executor.onComplete(task, result, db);
			} catch (error) {
				console.error(`Task ${task.uid} failed:`, error);
				task.status = "failed";
				task.error = error instanceof Error ? error : new Error(String(error));
				
				await executor.onFailure(task, error, result, db);
				// Send failure status back to parent
				sendProcessResponse(task, error, result);
			}

			// Send result/status back to parent process
			sendProcessResponse(task, null, result);
		} else {
			sendProcessResponse(task, `No executor for type: ${task.type}`, result);
		}
	} catch (err) {
		sendProcessResponse(null, err, result);
	}
});
