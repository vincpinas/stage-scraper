import { PrismaClient } from "@db/prisma/index.js";
import { Task } from "./index.ts";

import { TaskData, TaskResult } from "@types";

export default class TaskExecutor<T extends TaskData = TaskData> {
	taskType: string;

	constructor(taskType: string) {
		this.taskType = taskType;
	}

	async exec(task: Task<T>): Promise<TaskResult> {
		return { processed: true };
	}

	async onFailure(
		task: Task<T>,
		error: unknown,
		result: TaskResult | null,
		db: PrismaClient
	): Promise<void> {}

	async onComplete(
		task: Task<T>,
		result: TaskResult,
		db: PrismaClient
	): Promise<void> {}

	async saveResult(
		task: Task<T>,
		result: TaskResult,
		db: PrismaClient
	): Promise<void> {}
}
