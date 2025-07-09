import type { DBColumn, DBRow } from "@types";

import DB from "./index.ts";

export default class Table {
	public tableName: string;
	protected db: DB;

	constructor(db: DB, tableName: string) {
		this.tableName = tableName;
		this.db = db;
	}

	// Query methods
	// ================================

	async all(): Promise<any[]> {
		return await this.db.query(`SELECT * FROM ${this.tableName}`);
	}

	async insert(items: DBRow) {
		const fields = items.map(item => item.field).join(", ");
		const placeholders = items.map(() => "?").join(", ");
		const values = items.map(item => item.value);

		const query = `INSERT INTO ${this.tableName} (${fields}) VALUES (${placeholders})`;

		try {
			const results = await this.db.query(query, values);
			return results;
		} catch (err) {
			console.error(err);
			throw err;
		}
	}

	async get(getOptions: DBColumn): Promise<DBRow | null> {
		const query = `SELECT * FROM \`${this.tableName}\` WHERE \`${getOptions.field}\` = ? LIMIT 1`;
		
		try {
			const results = await this.db.query(query, [getOptions.value]);
			return Array.isArray(results) && results.length > 0 ? results[0] : null;
		} catch (err) {
			console.error(`Error in get() for table ${this.tableName}:`, err);
			throw err;
		}
	}

	// Utility methods
	// ================================

	async clear() {
		const query = `DELETE FROM ${this.tableName}`;
		
		try {
			const results = await this.db.query(query);
			return results;
		} catch (err) {
			console.error(`Error clearing table ${this.tableName}:`, err);
			throw err;
		}
	}

	async exists(item: DBColumn): Promise<boolean> {
		const query = `SELECT 1 FROM \`${this.tableName}\` WHERE \`${item.field}\` = ? LIMIT 1`;
		
		try {
			const results = await this.db.query(query, [item.value]);
			return Array.isArray(results) && results.length > 0;
		} catch (err) {
			console.error("DB.exists error:", err);
			return false;
		}
	}
}
