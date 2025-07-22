import { PrismaClient } from "@db/prisma/index.js";
import { Task } from "@services/queue/index.ts";
import type Email from "@services/email.ts";
import type File from "@models/file.ts";
import type { Error, TaskData, SearchResults } from "@types"; 

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

export interface TaskResponse {
    task: Task | null;
    error: string | null;
    result: TaskResult;
}


// Union Types
export type TaskData = WebscrapeTaskData | SendEmailTaskData | CompressImageTaskData;

// Task specific data types.
export interface WebscrapeTaskData {
    url: string;
}

export interface SendEmailTaskData {
    email: Email;
}
export interface CompressImageTaskData {
    image: File;
    sizes: { width: number; height: number }[];
}


// Task specific result types.
export type TaskResult<T> = {
    processed: boolean;
} & T;

export interface CompressImageTaskResult {
    files: File[];
}

export interface SendEmailTaskResult {
    email: Email
}

export interface WebscrapeTaskResult {
    scrapedPosts: SearchResults[]
}