import { PrismaClient } from "@db/prisma/index.js";
import { Task } from "./index.ts";

import { TaskData, TaskResult } from "@types";

export default class TaskExecutor<T extends TaskData = TaskData, R = unknown> {
	taskType: string;

	constructor(taskType: string) {
		this.taskType = taskType;
	}

	async exec(_task: Task<T>): Promise<TaskResult<R>> {
		return { processed: true } as TaskResult<R>;
	}

	async onFailure(
		_task: Task<T>,
		_error: unknown,
		_result: TaskResult<R> | null,
		_db: PrismaClient
	): Promise<void> {}

	async onComplete(
		_task: Task<T>,
		_result: TaskResult<R>,
		_db: PrismaClient
	): Promise<void> {}

	async saveResult(
		_task: Task<T>,
		_result: TaskResult<R>,
		_db: PrismaClient
	): Promise<void> {}
}
