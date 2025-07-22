import "express";
import "express-session";
import "multer";

import HttpResponse from "@models/response.ts";
import StageScraper from "@app";
import type { ValidationOptions } from "./validation.d.ts";

declare module "express-serve-static-core" {
	interface Request {
		// Reference to app
		appRef: StageScraper;
		
		// Custom response class to be sent after each request
		httpResponse: HttpResponse
		
		// Validation properties
		requiresLogin?: boolean;
		validationProps: ValidationOptions

		file?: Express.Multer.File;
		
		// Queue properties
		usesQueue?: boolean;
		runQueue?: boolean;
		sendTaskToWorker?: (taskData: Task) => void;
	}

	interface Response {
		/**
		 * Override the send method to only accept HttpResponse instances
		 * This ensures type safety and consistency across the application
		 * 
		 * Example usage:
		 * res.send(req.httpResponse.setMessage("Success")); // ✅ Valid
		 * res.send({ message: "Success" }); // ❌ TypeScript error
		 * res.send("Success"); // ❌ TypeScript error
		 */
		send(body: HttpResponse): Response;
	}
}

declare module "express-session" {
	interface SessionData {
		loggedIn?: boolean;
		username?: string;
	}
}

export {} 