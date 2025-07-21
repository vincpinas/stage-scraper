import type { Request } from "express";

// Options
export interface ServerErrorOptions {
	req: Request;
	message: string;
	file?: string;
	method?: string;
}

// All errors
export type Error = BasicError | ServerError | DBError;

export interface BasicError {
	message: string
}

export interface ServerError {
	message: string;
	file?: string;
	method?: string;
	route?: string;
}

export interface DBError {
	field: string;
	message: string;
} 
