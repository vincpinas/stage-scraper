import type { TaskOptions, TaskStatus, TaskResult, Error } from "@types";

export default class QueueTask<TData = unknown> {
	// Core properties
	uid: string;
	name: string;
	type: string;
	description?: string;

	// Status & state
	status: "pending" | "running" | "completed" | "failed" | "cancelled" =
		"pending";
	progress: number = 0;
	startedAt?: Date;
	failedAt?: Date;
	completedAt?: Date;

	// Execution control
	promise: Promise<unknown>;
	private resolve!: (value: unknown) => void;
	private reject!: (error: unknown) => void;

	// Configuration
	priority: number;
	retryCount: number = 0;
	maxRetries: number;
	delay: number;
	timeout: number;
	runAt?: Date;

	// Data & context
	data: TData;
	userId?: number;
	metadata: Record<string, unknown>;

	// Error handling
	error?: Error;
	errorHistory: Error[] = [];

	constructor(options: TaskOptions<TData>) {
		this.uid = options.uid || this.generateId();
		this.name = options.name;
		this.type = options.type;
		this.description = options.description;
		this.priority = options.priority || 0;
		this.maxRetries = options.maxRetries || 3;
		this.delay = options.delay || 0;
		this.timeout = options.timeout || 30000; // 30 seconds default
		this.data = options.data as TData;
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

	async execute(executor: (task: QueueTask<TData>) => Promise<TaskResult>): Promise<TaskResult> {
		if (this.status !== "pending") {
			throw new Error(`Task ${this.uid} is not in pending status`);
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

			if(!result.processed) {
				this.setFailed();
				return result;
			}

			this.setCompleted();
			this.resolve(result);

			console.log(`(ID: ${this.uid}) ${this.description} }`, "Status:", this.status);

			return result;
		} catch (error) {
			if (this.shouldRetry(error as Error) && this.retry()) {
				console.warn(`Retrying task ${this.uid} (attempt ${this.retryCount}) due to error:`, error);
				return this.execute(executor); // Recursively retry
			}

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
			`(ID: ${this.uid}) ${this.description} }`,
			"Progress:",
			`${this.progress}%`
		);
	}

	getStatus(): TaskStatus {
		return {
			uid: this.uid,
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

	addError(error: Error) {
		this.error = error;
		this.errorHistory.push(error);

		console.error(error);
	}

	// Private methods
	// ================================
	
	private setFailed() {
		this.status = "failed";
		this.failedAt = new Date();
		this.progress = 0;
	}
	
	private setCompleted() {
		this.status = "completed";
		this.completedAt = new Date();
		this.progress = 100;
	}
	

	private handleError(error: Error): void {
		this.addError(error);
		this.setFailed();
		this.reject(error);
	}

	// Utility
	// ================================

	private generateId(): string {
		return `task_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
	}
	
	private createTimeout(): Promise<never> {
		return new Promise((_, reject) => {
			setTimeout(() => {
				reject(new Error(`Task ${this.uid} timed out after ${this.timeout}ms`));
			}, this.timeout);
		});
	}

	public sleep(ms: number): Promise<void> {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	private shouldRetry(error: Error): boolean {
		const retryableErrors = [
			'No scraper available for domain',
			'Invalid URL format',
			'Network timeout'
		];
		
		return retryableErrors.some(pattern => error.message.includes(pattern));
	}
}
