import fs from "fs";
import path from "path";

import { getFileParts } from "@lib/util.ts";
import TaskExecutor from "@services/queue/task-executor.ts";

export default class TaskExecutorRegistry {
	private static instance: TaskExecutorRegistry;
	private registry: Map<string, TaskExecutor> = new Map();
	private initialized: boolean = false;

	private constructor() {}

	public static getInstance(): TaskExecutorRegistry {
		if (!TaskExecutorRegistry.instance) {
			TaskExecutorRegistry.instance = new TaskExecutorRegistry();
		}
		return TaskExecutorRegistry.instance;
	}

	public async initialize(): Promise<void> {
		if (this.initialized) return;
		
		const executorDir = path.join(process.cwd(), "src", "tasks");
		const executorFiles = (await fs.promises.readdir(executorDir)).filter(
			(file) => file.endsWith(".ts") &&
			!file.endsWith(".test.ts") &&
			!file.startsWith(".") &&
			!file.includes(".copy")
		);

		
		for (const file of executorFiles) {
			const taskType = getFileParts(file).nameWithoutExtension; // Use the name of the file as the executor type
			const importedModule = await import(path.join(executorDir, file));
			const ExecutorClass = importedModule.default;
			
			if (
				typeof ExecutorClass !== "function" ||
				ExecutorClass === TaskExecutor ||
				!(ExecutorClass.prototype instanceof TaskExecutor)
			) {
				console.warn(
					`⏩ Skipping task module ${name}, import.default is not an instance of TaskExecutor`
				);
				continue;
			}

			const executor: TaskExecutor = new ExecutorClass(taskType);
			this.registry.set(executor.taskType, executor)

			console.log(`[${process.env.WORKER === "true" ? "Worker" : "Server"}] 🔧 Registered executor for task type: ${executor.taskType}`);
		}
		this.initialized = true;
	}

	public getRegistry(): Map<string, TaskExecutor> {
		return this.registry;
	}

	public getExecutor(type: string): TaskExecutor | undefined {
		return this.registry.get(type);
	}
}


