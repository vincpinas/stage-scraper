import { PrismaClient } from "@db/prisma/index.js";
import type Email from "@services/email.ts";
import type File from "@models/file.ts";
import { Task } from "@services/queue/index.ts";
import type { Error, TaskData } from "@types"; 

export interface TaskOptions<TData = TaskData> {
    uid?: string;
    name: string;
    type: string;
    description: string;
    priority?: number;
    maxRetries?: number;
    delay?: number;
    timeout?: number;
    data?: TData;
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

export interface TaskResult<T = unknown> {
    processed: boolean;
    
    [key: string]: unknown;
}

export interface TaskResponse {
    task: Task | null;
    error: string | null;
    result: TaskResult;
}

export interface QueueOptions {
    runNow?: boolean;
}