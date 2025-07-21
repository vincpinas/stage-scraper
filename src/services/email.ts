import { Task } from "@services/queue/index.ts";
import type { SendEmailTaskData } from "@types";

interface EmailOptions {
	from?: string;
	to: string[];
	cc?: string[];
	bcc?: string[];
	subject: string;
	body: string;
	sendAt?: Date;
	userId?: number;
}

export default class Email {
	from: string;
	to: string[];
	cc: string[];
	bcc: string[];
	subject: string;
	body: string;
	sendAt?: Date;
	userId?: number;

	constructor(options: EmailOptions) {
		this.from = options.from || '"Nethaven" <stage-scraper@nethaven.nl>';
		this.to = options.to;
		this.cc = options.cc || [];
		this.bcc = options.bcc || [];
		this.subject = options.subject;
		this.body = options.body;
		this.sendAt = options.sendAt;
		this.userId = options.userId
	}

	getTime() {
		if (this.sendAt) {
			const now = new Date();
			const diffMs = this.sendAt.getTime() - now.getTime();
			if (diffMs <= 0) return " (scheduled for now)";
			const diffSec = Math.floor(diffMs / 1000);
			const diffMin = Math.floor(diffSec / 60);
			const diffHr = Math.floor(diffMin / 60);
			if (diffHr > 0) return ` (in ${diffHr} hour${diffHr > 1 ? "s" : ""})`;
			if (diffMin > 0)
				return ` (in ${diffMin} minute${diffMin > 1 ? "s" : ""})`;
			return ` (in ${diffSec} second${diffSec > 1 ? "s" : ""})`;
		}
        
        return "";
	}

	task() {
		const task = new Task<SendEmailTaskData>({
			name: `Send email to: ${this.to.join()}${this.getTime()}`,
			type: "send-email",
			description: `Sending an email to: ${this.to.join()}`,
			data: {
				email: this,
			},
			runAt: this.sendAt,
			userId: this.userId
		});

		return task;
	}
}
