import type { completionExecutorType, TaskResponse, TaskResult, TaskStatus } from "@/types/queue.d.ts";

import { ChildProcess } from "child_process";
import Task from "./task.ts";
import TaskStore from "./task-store.ts";

export default class Queue {
	private taskStack: Task[] = [];
	private maxConcurrentTasks: number;
	private taskExecutors: Map<string, (task: Task) => Promise<TaskResult>> =
		new Map();
	private taskCompletionExecutors: Map<string, completionExecutorType> =
		new Map();
	private taskStore: TaskStore;

	constructor(maxConcurrentTasks: number = 3) {
		this.maxConcurrentTasks = maxConcurrentTasks;
		this.taskStore = new TaskStore(this);
	}

	// Public methods
	// ================================

	async runPendingTasks(worker: ChildProcess) {
		// Send only ready tasks to the worker
		const pendingTasks = this.taskStack.filter(
			(task) => typeof task.isReadyToRun === "function" && task.isReadyToRun()
		);

		const taskLoad = pendingTasks.length;

		if (taskLoad === 0) return;

		if (taskLoad > 1) {
			await this.scheduleTasks();
		}

		console.log(
			`🚀 Sending ${taskLoad} pending`,
			taskLoad > 1 ? "tasks" : "task",
			"to worker"
		);

		worker.on("message", async (data: TaskResponse) => {
			if (!data.task) return;

			await this.taskStore.saveTask(data);
			await this.taskStore.saveResult(data);
		});

		for (const task of pendingTasks) {
			worker.send(task);
		}
	}

	async scheduleTasks(): Promise<void> {
		console.log("📅 Scheduling tasks...");

		// Sort tasks by priority and creation time
		this.taskStack.sort((a, b) => {
			// Higher priority first
			if (a.priority !== b.priority) {
				return b.priority - a.priority;
			}
			// Earlier tasks first (assuming tasks are added in order)
			return 0;
		});

		console.log(`📋 Scheduled ${this.taskStack.length} tasks`);
	}

	add(task: Task): this {
		this.taskStack.push(task);
		console.log(`➕ Added task: ${task.name} (ID: ${task.uid})`);
		return this;
	}

	remove(taskId: string): boolean {
		const index = this.taskStack.findIndex((task) => task.uid === taskId);

		if (index !== -1) {
			const task = this.taskStack.splice(index, 1)[0];
			console.log(`🗑️ Removed task: ${task.name} (ID: ${taskId})`);

			if (this.taskStack.length === 0) console.log("✅ Queue finished");

			return true;
		}

		return false;
	}

	cancel(taskId: string): boolean {
		// Cancel pending task only
		const pendingTask = this.taskStack.find((task) => task.uid === taskId);
		if (pendingTask) {
			pendingTask.cancel();
			this.remove(taskId);
			return true;
		}
		return false;
	}

	getTask(taskId: string): Task | undefined {
		return this.taskStack.find((task) => task.uid === taskId);
	}

	getAllTasks(): TaskStatus[] {
		return this.taskStack.map((task) => task.getStatus());
	}

	getPendingTasks(): TaskStatus[] {
		return this.taskStack
			.filter(
				(task) => typeof task.isReadyToRun === "function" && task.isReadyToRun()
			)
			.map((task) => task.getStatus());
	}

	registerExecutor(
		taskType: string,
		executor: (task: Task) => Promise<TaskResult>,
		completionExecutor: completionExecutorType
	): void {
		this.taskExecutors.set(taskType, executor);
		this.taskCompletionExecutors.set(taskType, completionExecutor)
		console.log(`🔧 Registered executor for task type: ${taskType}`);
	}

	clear(): void {
		this.taskStack = [];
		console.log("🧹 Queue cleared");
	}
}

export { Task };
