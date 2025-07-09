import mysql from "mysql2";

// Tables
import UsersTable from "./users-table.ts";

process.loadEnvFile(".env");

class DB {
	private pool: mysql.Pool | null = null;
	
	public users: UsersTable;
	
	constructor() {
		this.users = new UsersTable(this, "users");
		this.createPool();
	}

	// Private methods
	// ================================

	private createPool(): void {
		this.pool = mysql.createPool({
			host: process.env.DB_HOST,
			user: process.env.DB_USER,
			password: process.env.DB_PASSWORD,
			database: process.env.DB_NAME,
			port: Number(process.env.DB_PORT),
			connectionLimit: 10, // Maximum number of connections in the pool
		});

		// Handle pool errors
		this.pool.on('error', (err) => {
			console.error('Database pool error:', err);
		});
	}

	// Public methods
	// ================================

	public disconnect(): void {
		if (this.pool) {
			this.pool.end();
			this.pool = null;
		}
	}

	public query(query: string, values?: any): Promise<any> {
		values = values ? values : null;

		return new Promise((resolve, reject) => {
			if (!this.pool) {
				reject(new Error('Database pool not initialized'));
				return;
			}

			this.pool.query(query, values, (err, results) => {
				if (err) reject(err);
				resolve(results);
			});
		});
	}
}

export default DB;
