import type { TaskOptions, TaskStatus } from "@/types/queue.d.ts";
import type { Error } from "@/types/error.d.ts";

export default class QueueTask {
	// Core properties
	id: string;
	name: string;
	type: string;
	description?: string;

	// Status & state
	status: "pending" | "running" | "completed" | "failed" | "cancelled" =
		"pending";
	progress: number = 0;
	startedAt?: Date;
	completedAt?: Date;

	// Execution control
	promise: Promise<any>;
	private resolve!: (value: any) => void;
	private reject!: (error: any) => void;

	// Configuration
	priority: number;
	retryCount: number = 0;
	maxRetries: number;
	delay: number;
	timeout: number;
	runAt?: Date;

	// Data & context
	data: any;
	userId?: number;
	metadata: Record<string, any>;

	// Error handling
	error?: Error;
	errorHistory: Error[] = [];

	constructor(options: TaskOptions) {
		this.id = options.id || this.generateId();
		this.name = options.name;
		this.type = options.type;
		this.description = options.description;
		this.priority = options.priority || 0;
		this.maxRetries = options.maxRetries || 3;
		this.delay = options.delay || 0;
		this.timeout = options.timeout || 30000; // 30 seconds default
		this.data = options.data;
		this.userId = options.userId;
		this.metadata = options.metadata || {};
		this.runAt = options.runAt ? new Date(options.runAt) : undefined;

		this.promise = new Promise((resolve, reject) => {
			this.resolve = resolve;
			this.reject = reject;
		});
	}

	// Public methods
	// ================================

	async execute(executor: (task: QueueTask) => Promise<any>): Promise<any> {
		if (this.status !== "pending") {
			throw new Error(`Task ${this.id} is not in pending status`);
		}

		this.status = "running";
		this.startedAt = new Date();
		this.progress = 0;

		try {
			// Apply delay if specified
			if (this.delay > 0) {
				await this.sleep(this.delay);
			}

			// Execute the task with timeout
			const result = await Promise.race([executor(this), this.createTimeout()]);

			this.status = "completed";
			this.completedAt = new Date();
			this.progress = 100;

			this.resolve(result);

			console.log(`(ID: ${this.id}) ${this.description} }`, "Status:", this.status);

			return result;
		} catch (error) {
			this.handleError(error as Error);
			throw error;
		}
	}

	retry(): boolean {
		if (this.retryCount >= this.maxRetries) {
			return false;
		}

		this.retryCount++;
		this.status = "pending";
		this.progress = 0;
		this.startedAt = undefined;
		this.completedAt = undefined;
		this.error = undefined;

		return true;
	}

	cancel(): void {
		if (this.status === "pending" || this.status === "running") {
			this.status = "cancelled";
			this.completedAt = new Date();
			this.reject(new Error("Task cancelled"));
		}
	}

	updateProgress(progress: number): void {
		this.progress = Math.max(0, Math.min(100, progress));

		console.log(
			`(ID: ${this.id}) ${this.description} }`,
			"Progress:",
			`${this.progress}%`
		);
	}

	getStatus(): TaskStatus {
		return {
			id: this.id,
			name: this.name,
			type: this.type,
			status: this.status,
			progress: this.progress,
			startedAt: this.startedAt,
			completedAt: this.completedAt,
			error: this.error,
			retryCount: this.retryCount,
			maxRetries: this.maxRetries,
			userId: this.userId,
			metadata: this.metadata,
		};
	}

	isReadyToRun(): boolean {
		return !this.runAt || this.runAt <= new Date();
	}

	// Private methods
	// ================================

	private generateId(): string {
		return `task_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
	}

	private handleError(error: Error): void {
		this.error = error;
		this.errorHistory.push(error);
		this.status = "failed";
		this.completedAt = new Date();
		this.reject(error);
	}

	private createTimeout(): Promise<never> {
		return new Promise((_, reject) => {
			setTimeout(() => {
				reject(new Error(`Task ${this.id} timed out after ${this.timeout}ms`));
			}, this.timeout);
		});
	}

	public sleep(ms: number): Promise<void> {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}
}
