import type { ValidationResult } from "@types";

import HttpResponse from "@models/response.ts";

export default class Validate {
	// Utility methods
	// ================================

	static toResponse(item: ValidationResult | ValidationResult[]): HttpResponse {
		const response = new HttpResponse();

		if (Array.isArray(item)) {
			item.forEach((item) =>
				response.addError({
					field: item.field,
					message: item.message,
				})
			);
		} else {
			response.addError({
				field: item.field,
				message: item.message,
			});
		}

		if (response.errors.length > 0) {
			return response.setMessage("One or more errors encountered");
		}

		return response;
	}

	static all(items: ValidationResult[]) {
		return items
			.map((item) => {
				if (!item.valid) {
					return item;
				}
			})
			.filter((item) => item !== undefined);
	}

	// Validation methods
	// ================================

	static email(email: string, field: string = "email"): ValidationResult {
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			return {
				valid: false,
				field,
				message: "Invalid email address",
			};
		}

		return {
			valid: true,
			field,
			message: "",
		};
	}

	static username(username: string, field: string = "username"): ValidationResult {
		if (username.length < 3) {
			return {
				valid: false,
				field,
				message: "Username must be at least 3 characters long",
			};
		}

		return {
			valid: true,
			field,
			message: "",
		};
	}

	static password(password: string, field: string = "password"): ValidationResult {
		if (!password || password.length < 6) {
			return {
				valid: false,
				field,
				message: "Password must be at least 6 characters long",
			};
		}
		if (!/[A-Z]/.test(password)) {
			return {
				valid: false,
				field,
				message: "Password must contain at least one uppercase letter",
			};
		}
		if (!/[a-z]/.test(password)) {
			return {
				valid: false,
				field,
				message: "Password must contain at least one lowercase letter",
			};
		}
		if (!/[0-9]/.test(password)) {
			return {
				valid: false,
				field,
				message: "Password must contain at least one number",
			};
		}

		return {
			valid: true,
			field,
			message: "",
		};
	}
}
