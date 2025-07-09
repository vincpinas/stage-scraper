import type { Error } from "@/types/error.d.ts"; 

export interface TaskOptions {
    id?: string;
    name: string;
    type: string;
    description?: string;
    priority?: number;
    maxRetries?: number;
    delay?: number;
    timeout?: number;
    data?: any;
    userId?: number;
    metadata?: Record<string, any>;
    runAt?: Date;
}

export interface TaskStatus {
    id: string;
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
    metadata?: Record<string, any>;
    runAt?: Date;
}

export interface QueueOptions {
    runNow?: boolean;
}