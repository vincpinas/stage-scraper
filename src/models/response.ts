import User from "@models/user/index.ts";
import type {
	HttpResponseOptions,
	UserData,
	ServerErrorOptions,
	Error,
} from "@types";

export default class HttpResponse {
	user: User | null = null;
	errors: Error[];
	results: unknown[];
	message: string;

	userSet: boolean = false;

	constructor(options?: HttpResponseOptions) {
		this.errors = [];
		this.results = [];
		this.message = options?.message || "";
	}

	// Utility methods
	// ================================

	clean() {
		// Remove any possible duplicate errors
		this.errors = [...new Set(this.errors)];

		// Remove any empty arrays
		const entries = Object.entries(this);

		entries.forEach((entry) => {
			const [key, value] = entry;

			if (Array.isArray(value) && value.length === 0) {
				delete this[key as keyof this];
			}
		});

		// Delete user if user property was not set manually before.
		if (!this.userSet && this.user === null) {
			delete this["user" as keyof this];
		}
		delete this["userSet" as keyof this];

		return this;
	}

	combine(response: HttpResponse) {
		this.errors = [...this.errors, ...response.errors];
		this.results = [...this.results, ...response.results];

		Object.entries(response).forEach((entry) => {
			const [key, value] = entry;
			this.add(key, value);
		});

		return this;
	}

	// Data manipulation methods
	// ================================

	add(key: string, value: unknown) {
		const responseParam: unknown = this[key as keyof this];

		if (
			typeof responseParam === "string" &&
			responseParam !== "" &&
			typeof value === "string"
		) {
			(this as Record<string, unknown>)[key] = value;

			return this;
		}

		if (Array.isArray(responseParam)) {
			if (Array.isArray(value)) {
				(this as Record<string, unknown>)[key] = [...responseParam, ...value];
			} else {
				(this as Record<string, unknown>)[key] = [...responseParam, value];
			}

			return this;
		}

		// For other cases, just set the value
		(this as Record<string, unknown>)[key] = value;

		return this;
	}

	addResults(results: unknown) {
		if (Array.isArray(results)) {
			this.results = [...this.results, ...results];
		} else {
			this.results.push(results);
		}

		return this;
	}

	addServerError(error: ServerErrorOptions) {
		this.errors.push({
			route: `${error.req.baseUrl}${error.req.url}`,
			message: error.message,
		});

		return this;
	}

	addError(error: Error) {
		this.errors.push(error);

		return this;
	}

	setMessage(message: string) {
		this.message = message;

		return this;
	}

	setUser(user: User | UserData | null) {
		// If user data is passed, create a user otherwise just set null.
		if (user) {
			if (user instanceof User) {
				this.user = user;
			} else {
				this.user = new User(user);
			}
		} else {
			this.user = user;
		}

		this.userSet = true;

		return this;
	}
}
