import type { TaskOptions } from "@/types/queue.d.ts";

import Queue, { Task } from "./index.ts";

import compressImageExecutor from "./jobs/compress-image.ts";
import webscrapeExecutor from "./jobs/webscrape.ts";
import { readdirSync } from "fs";
import path from "path";

// Create a queue with 1 concurrent task (can be increased if desired)
const queue = new Queue(1);

const executorDir = path.join(process.cwd(), "src", "services", "queue", "jobs")
const executorFiles = readdirSync(executorDir).filter((file) =>
	file.endsWith(".ts")
);

// Register all executors from src/services/queue/jobs.
executorFiles.forEach(async file => {
	// The filename minus the extension automatically gets used as the task type.
	const name = file.split(".")[0];
	const executor = await import(path.join(executorDir, file));
	
	queue.registerExecutor(name, executor.default);
});

// Listen for tasks from the parent process
process.on("message", async (taskData) => {
	try {
		// Reconstruct a Task instance from plain object
		const task = new Task(taskData as TaskOptions);

		// Register the task and immediately process it using the registered executor
		const executor = queue['taskExecutors'].get(task.type);
		
		if (executor) {
			await task.execute(executor);
			
			queue.remove(task.id);

			// Send result/status back to parent process
			process.send?.({ id: task.id, status: task.status, result: task });
		} else {
			process.send?.({ id: task.id, status: 'failed', error: `No executor for type: ${task.type}` });
		}
	} catch (err) {
		process.send?.({ error: err instanceof Error ? err.message : String(err) });
	}
});
