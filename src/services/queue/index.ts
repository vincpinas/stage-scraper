import { ChildProcess } from "child_process";

import Task from "./task.ts";
import TaskStore from "./task-store.ts";
import TaskExecutor from "./task-executor.ts";

import type { TaskResponse, TaskStatus } from "@types";
import TaskExecutorRegistry from "@services/queue/task-registry.ts";

export default class Queue {
	private taskStack: Task[] = [];
	private maxConcurrentTasks: number;
	private taskExecutors: TaskExecutorRegistry;
	private taskStore: TaskStore;
	private loopInitialized: boolean;

	constructor(maxConcurrentTasks: number = 3) {
		this.maxConcurrentTasks = maxConcurrentTasks;
		this.taskStore = new TaskStore(this);
		this.taskExecutors = TaskExecutorRegistry.getInstance();

		this.loopInitialized = false;
	}

	// Public methods
	// ================================

	async runAutomatically(delay: number, worker: ChildProcess) {
		let readableDuration: number;
		let suffix: string;

		this.loopInitialized = true;
	
		if (delay >= 60) {
			readableDuration = delay / 60;
			suffix = delay === 60 ? "minute" : "minutes";
		} else {
			readableDuration = delay;
			suffix = "seconds";
		}
	
		while (this.loopInitialized) {
			await this.taskStore.syncWithDB();

			if(this.getPendingTasks().length === 0) return;

			console.log(
				`🧹 Running pending tasks (every ${readableDuration} ${suffix})`
			);
			
			await this.runPendingTasks(worker);
			await new Promise((resolve) => setTimeout(resolve, delay * 1000));
		}
	}

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

		// Saves the task and runs the saveResult method if the relevant taskExecutor has one.
		worker.on("message", async (data: TaskResponse) => {
			if (!data.task) return;
			
			await this.taskStore.saveTask(data);
			
			const executor = this.taskExecutors.getExecutor(data.task.type);

			if(!executor || !executor.saveResult) return;

			await executor.saveResult(data.task, data.result, this.taskStore.db);
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

	get executorRegistry(): TaskExecutorRegistry {
		return this.taskExecutors;
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

	clear(): void {
		this.taskStack = [];
		console.log("🧹 Queue cleared");
	}
}

export { Task, TaskStore, TaskExecutor };
