import { PrismaClient } from "@/db/prisma/index.js";
import File from "@/models/file.ts";
import { Task } from "@/services/queue/index.ts";
import type { Error } from "@/types/error.d.ts"; 

export type completionExecutorType = (db: PrismaClient, task: Task, result: TaskResult) => Promise<void>

export interface TaskOptions {
    uid?: string;
    name: string;
    type: string;
    description: string;
    priority?: number;
    maxRetries?: number;
    delay?: number;
    timeout?: number;
    data?: unknown;
    userId?: number;
    metadata?: Record<string, unknown>;
    runAt?: Date;
}

export interface TaskStatus {
    uid: string;
    name: string;
    type: string;
    status: 'pending' | 'running' | 'completed' | 'failed' | 'cancelled';
    progress: number;
    startedAt?: Date;
    completedAt?: Date;
    error?: Error;
    retryCount: number;
    maxRetries: number;
    userId?: number;
    metadata?: Record<string, unknown>;
    runAt?: Date;
}

export interface TaskResult {
    processed: boolean;

    files?: File[]
	[key: string]: unknown
}

export interface TaskResponse {
    task: Task | null;
    error: string | null;
    result: TaskResult;
}

export interface QueueOptions {
    runNow?: boolean;
}