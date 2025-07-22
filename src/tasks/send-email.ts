import nodemailer from "nodemailer";

import { PrismaClient } from "@db/prisma/index.js";
import Email from "@services/email.ts";
import { Task } from "@services/queue/index.ts";
import TaskExecutor from "@services/queue/task-executor.ts";
import { getFileParts } from "@lib/util.ts";
import { safeUpsert } from "@db/helpers.ts";

import type {
	SendEmailTaskData,
	SendEmailTaskResult,
	TaskResult,
} from "@types";

export default class SendEmailTask extends TaskExecutor {
	constructor(taskType?: string) {
		if (!taskType) {
			taskType = getFileParts(import.meta.filename).nameWithoutExtension;
		}

		super(taskType);
	}

	override async exec(
		task: Task<SendEmailTaskData>
	): Promise<TaskResult<SendEmailTaskResult>> {
		const emailOptions: Email = task.data.email;

		try {
			const transporter = nodemailer.createTransport({
				host: process.env.SMTP_HOST,
				port: Number(process.env.SMTP_PORT),
				secure: Number(process.env.SMTP_PORT) === 465 ? true : false,
				auth: {
					user: process.env.SMTP_USER,
					pass: process.env.SMTP_PASSWORD,
				},
			});

			const info = await transporter.sendMail({
				from: emailOptions.from,
				to: emailOptions.to,
				subject: emailOptions.subject,
				text: emailOptions.body,
				html: `<b>${emailOptions.body}</b>`,
			});

			console.log("Message sent:", info.messageId);
		} catch (error) {
			task.addError(error instanceof Error ? error : new Error(String(error)));

			return {
				processed: false,
			};
		}

		return {
			processed: true,
			email: emailOptions,
		};
	}

	override async saveResult(
		task: Task<SendEmailTaskData>,
		result: TaskResult<SendEmailTaskResult>,
		db: PrismaClient
	): Promise<void> {
		if ("email" in task.data) {
			const email = task.data.email;
			const insert = {
				task_uid: task.uid,
				subject: email.subject,
				from: email.from,
				to: email.to.join(),
				body: email.body,
				user_id: task.userId || null,
				sent_at: task.runAt || new Date(Date.now()),
			};

			await safeUpsert(db.emails, { task_uid: task.uid }, insert);
		}
	}
}
