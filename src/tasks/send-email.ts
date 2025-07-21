import nodemailer from "nodemailer";

import { PrismaClient } from "@db/prisma/index.js";
import Email from "@services/email.ts";
import { Task } from "@services/queue/index.ts";

import type { SendEmailTaskData, SendEmailTaskResult, TaskResult } from "@types";

async function sendEmailTask(task: Task<SendEmailTaskData>): Promise<TaskResult<SendEmailTaskResult>> {
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
			text: emailOptions.body, // plain‑text body
			html: `<b>${emailOptions.body}</b>`, // HTML body
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

async function onComplete(db: PrismaClient, task: Task<SendEmailTaskData>, result: TaskResult<SendEmailTaskResult>) {}

export default {
	exec: sendEmailTask,
	onComplete,
};
