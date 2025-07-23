import type { EatFoodTaskData } from "@tasks/eat-food.ts";
import type { MyClassTaskData } from "@tasks/my-class.ts";
// These imports are automatically extended by using the "yarn generate-task" command in your console:
import { WebscrapeTaskData } from "src/tasks/webscrape.ts";
import { SendEmailTaskData } from "src/tasks/send-email.ts";
import { CompressImageTaskData } from "src/tasks/compress-image.ts";

import { Task } from "@services/queue/index.ts";
import type { Error } from "@types"; 


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

// This type is automatically extended by using the "yarn generate-task" command in your console:
export type TaskData = WebscrapeTaskData | SendEmailTaskData | CompressImageTaskData | EatFoodTaskData | MyClassTaskData;

export type TaskResult<T> = {
    processed: boolean;
} & T;
