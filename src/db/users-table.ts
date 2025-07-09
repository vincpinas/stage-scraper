import type { DBColumn, DBRow, UserData } from "@types";
import HttpResponse from "@/models/response.ts";
import DB from "./index.ts";
import Table from "./table.ts";

import User from "@/models/user/index.ts";

export default class Users extends Table {
	constructor(db: DB, tableName: string) {
		super(db, tableName);
	}

	// Authentication methods
	// ================================

	async login(username: string, password: string): Promise<User | null> {
		const query = `SELECT * FROM \`${this.tableName}\` WHERE (\`username\` = ? OR \`email\` = ?) AND \`password\` = ? LIMIT 1`;
		const params = [username, username, password];
		
		const results = await this.db.query(query, params);
		const hasResults = results && results.length > 0;

		return hasResults ? new User(results[0]) : null;
	}

	// CRUD operations
	// ================================

	async create(
		username: string,
		password: string,
		email: string
	): Promise<HttpResponse> {
		const response = new HttpResponse();

		// Check for existing username and email
		const usernameExists = await this.exists({
			value: username,
			field: "username",
		});
		const emailExists = await this.exists({ value: email, field: "email" });

		// Add validation errors if needed
		if (usernameExists) {
			response.addError({
				field: "username",
				message: "This username is already in use.",
			});
		}

		if (emailExists) {
			response.addError({
				field: "email",
				message: "This email is already in use.",
			});
		}

		// Return early if validation failed
		if (response.errors.length > 0) {
			return response.setMessage("One or more errors encountered");
		}

		// Prepare user data for insertion
		const userData = [
			{ field: "username", value: username },
			{ field: "email", value: email },
			{ field: "password", value: password },
			{ field: "avatar", value: null },
		];

		// Attempt to create the user
		const insertResult = await this.insert(userData);

		if (!insertResult) {
			return response.setMessage("Failed to create account. Please try again.");
		}

		console.log(insertResult)

		return response.setMessage("Account successfully created");
	}

	async update(username: string, items: DBRow): Promise<HttpResponse> {
		const response = new HttpResponse();
		const user = await this.getByName(username);

		// Check if user exists
		if (!user) {
			return response
				.addError({
					field: "username",
					message: "No user found with this username",
				})
				.setMessage("Update failed: User not found");
		}

		// Build update query
		const updateFields = items
			.map((item) => `\`${item.field}\` = ?`)
			.join(", ");
		const query = `UPDATE \`${this.tableName}\` SET ${updateFields} WHERE \`username\` = ?`;

		// Prepare parameters (values first, then username for WHERE clause)
		const params = [...items.map((item) => item.value), username];

		try {
			const result = await this.db.query(query, params);

			if (result && result.affectedRows > 0) {
				response.setUser(await this.getByName(username));
				return response.setMessage("User updated successfully");
			} else {
				return response.setMessage("No changes were made to the user");
			}
		} catch (err) {
			console.error(`Error in update() for table ${this.tableName}:`, err);
			response.addError({
				field: "database",
				message: "Database error occurred",
			})
			.setMessage("Failed to update user");
		}

		return response;
	}

	async remove(): Promise<boolean> {
		return false;
	}

	// Utility methods
	// ================================

	async getByName(name: string): Promise<User | null> {
		const query = `SELECT * FROM \`${this.tableName}\` WHERE \`username\` = ? OR \`email\` = ? LIMIT 1`;
		const params = [name, name];

		try {
			const results = await this.db.query(query, params);

			const hasResults = Array.isArray(results) && results.length > 0;
			return hasResults ? new User(results[0]) : null;
		} catch (err) {
			console.error(`Error in getByName() for table ${this.tableName}:`, err);
			throw err;
		}
	}
}
