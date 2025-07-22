import { PrismaClient } from "@db/prisma/index.js";
import { Task } from "./index.ts";

import { TaskData, TaskResult } from "@types";

export default class TaskExecutor<T extends TaskData = TaskData, R = unknown> {
	taskType: string;

	constructor(taskType: string) {
		this.taskType = taskType;
	}

	async exec(task: Task<T>): Promise<TaskResult<R>> {
		return { processed: true } as TaskResult<R>;
	}

	async onFailure(
		task: Task<T>,
		error: unknown,
		result: TaskResult<R> | null,
		db: PrismaClient
	): Promise<void> {}

	async onComplete(
		task: Task<T>,
		result: TaskResult<R>,
		db: PrismaClient
	): Promise<void> {}

	async saveResult(
		task: Task<T>,
		result: TaskResult<R>,
		db: PrismaClient
	): Promise<void> {}
}
