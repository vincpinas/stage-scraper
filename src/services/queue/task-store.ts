import type { TaskResponse } from "@types";
import { PrismaClient } from "@db/prisma/index.js";
import Queue from "./index.ts";
import { safeUpsert } from "@db/helpers.ts";

export default class TaskStore {
	db: PrismaClient = new PrismaClient();
	queue: Queue;

	constructor(queue: Queue) {
		this.queue = queue;
	}

	// TODO: Implement incase of unfinished tasks during a server crash or new pending tasks added straight to the DB.
	async syncWithDB() {}

	async saveTask(taskResponse: TaskResponse) {
		const task = taskResponse.task;
		if (!task) return;

		if (taskResponse.result && "processed" in taskResponse.result) {
			delete (taskResponse.result as Partial<typeof taskResponse.result>)
				.processed;
		}

		const insert = {
			uid: task.uid,
			type: task.type,
			status: task.status,
			data: task.data ? JSON.parse(JSON.stringify(task.data)) : null,
			error: task.error ? JSON.stringify(task.error) : null, // only if error is a string column
			usersId: task.userId,
			started_at: task.startedAt,
			finished_at: task.completedAt,
		};

		await safeUpsert(this.db.tasks, { uid: task.uid }, insert, async (task) => {
			if (!task) return;

			if (task.status === "completed") {
				this.queue.remove(task.uid);
			}
		});
	}
}
