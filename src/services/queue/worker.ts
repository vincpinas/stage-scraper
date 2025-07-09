import type { TaskOptions } from "@/types/queue.d.ts";

import Queue, { Task } from "./index.ts";

import compressImageExecutor from "./executors/compress-image.ts";
import webscrapeExecutor from "./executors/webscrape.ts";

// Create a queue with 1 concurrent task (can be increased if desired)
const queue = new Queue(1);

// Register all relevant executors here
queue.registerExecutor("compress-image", compressImageExecutor);
queue.registerExecutor("webscrape", webscrapeExecutor);

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
