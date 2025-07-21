import type { TaskResponse, TaskResult, TaskStatus } from "@/types/queue.d.ts";
import { PrismaClient } from "@db/prisma/index.js";
import Queue from "./index.ts";
import File from "@/models/file.ts";

const enum Tables {
	Emails = "emails",
	Scrapes = "scrapes",
	Uploads = "uploads"
}

// Task registry for mapping task types to their corresponding tables
const taskRegistry: Record<string, { table: string }> = {
	"send-email": { table: Tables.Emails },
	"webscrape": { table: Tables.Scrapes },
	"compress-image": { table: Tables.Uploads },
	"uploads": { table: Tables.Uploads },
};

export default class TaskStore {
	db: PrismaClient = new PrismaClient();;
	queue: Queue;

	constructor(queue: Queue) {
		this.queue = queue;
	}

	// TODO: Implement incase of unfinished tasks during a server crash or new pending tasks added straight to the DB.
	async syncWithDB() {}

	async saveResult(taskResponse: TaskResponse) {
		const task = taskResponse.task;
		if (!task) return;
		
		const registryEntry = taskRegistry[task.type];
		if (!registryEntry) return;

		const result = taskResponse.result;
		const table = registryEntry.table;

		if (result && "processed" in result) {
			delete (result as Partial<typeof result>).processed;
		}

		// Example: handle scrapes table
		if (table === Tables.Scrapes) {
			const insert = {
				task_uid: task.uid,
				result: result ? JSON.parse(JSON.stringify(result)) : null,
				url: task.data.url,
				user_id: task.userId || null,
			};
			try {
				await this.db.scrapes.upsert({
					where: { task_uid: task.uid },
					update: insert,
					create: insert,
				});
			} catch (err: any) {
				if (err.code === "P2002") {
					try {
						await this.db.scrapes.update({
							where: { task_uid: task.uid },
							data: insert,
						});
					} catch (updateErr) {
						console.error("Failed to update scrapes in database after upsert failed:", updateErr);
					}
				} else {
					console.error("Failed to upsert scrapes in database:", err);
				}
			}
		}
		else if(table === Tables.Emails) {
			const email = task.data.email;
			const insert = {
				task_uid: task.uid,
				subject: email.subject,
				from: email.from,
				to: email.to.join(),
				body: email.body,
				user_id: task.userId || null,
				sent_at: task.runAt || new Date(Date.now())
			}
			try {
				await this.db.emails.upsert({
					where: { task_uid: task.uid },
					update: insert,
					create: insert,
				});
			} catch (err: any) {
				if (err.code === "P2002") {
					try {
						await this.db.emails.update({
							where: { task_uid: task.uid },
							data: insert,
						});
					} catch (updateErr) {
						console.error("Failed to update emails in database after upsert failed:", updateErr);
					}
				} else {
					console.error("Failed to upsert emails in database:", err);
				}
			}
		}
		else if(table === Tables.Uploads) {
			const files = result && result.files as File[];
			if(!files) return;
			for (const file of files) {
				const insert = {
					uid: file.uid,
					type: file.type,
					mimetype: file.mimetype,
					size: file.size,
					filename: file.filename,
					filepath: file.filepath,
					publicpath: file.publicpath,
					user_id: file.userId
				};
				try {
					await this.db.uploads.upsert({
						where: { uid: file.uid },
						update: insert,
						create: insert,
					});
				} catch (err: any) {
					if (err.code === "P2002") {
						try {
							await this.db.uploads.update({
								where: { uid: file.uid },
								data: insert,
							});
						} catch (updateErr) {
							console.error("Failed to update uploads in database after upsert failed:", updateErr);
						}
					} else {
						console.error("Failed to upsert uploads in database:", err);
					}
				}
			}
		}
	}

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

		try {
			await this.db.tasks.upsert({
				where: { uid: task.uid },
				update: insert,
				create: insert,
			});

			if (task.status === "completed") {
				this.queue.remove(task.uid);
			}
		} catch (err: any) {
			// If unique constraint error, try update
			if (err.code === "P2002") {
				try {
					await this.db.tasks.update({
						where: { uid: task.uid },
						data: insert,
					});
				} catch (updateErr) {
					console.error(
						"Failed to update task in database after upsert failed:",
						updateErr
					);
				}
			} else {
				console.error("Failed to upsert task in database:", err);
			}
		}
	}
}
