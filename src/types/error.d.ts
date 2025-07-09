import type { Request } from "express";

// All errors
export type Error = ServerError | BasicError

export interface BasicError {
	message: string
}

// Server
export interface ServerErrorOptions {
	req: Request;
	message: string;
	file?: string;
	method?: any;
}

export interface ServerError {
	message: string;
	file?: string;
	method?: any;
	route?: string;
}