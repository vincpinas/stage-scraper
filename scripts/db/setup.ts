import DB from "@/db/index.ts";

const db = new DB();

// Clear all tables (drop in order of dependencies)
await db.query("DROP TABLE IF EXISTS scrapes");
await db.query("DROP TABLE IF EXISTS user_permissions");
await db.query("DROP TABLE IF EXISTS users");

// Create users table
await db.query(`
  CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    avatar VARCHAR(1000) NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  )
`);

// Create permissions table
await db.query(`
  CREATE TABLE user_permissions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    permissions JSON,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
  )
`);

// Create scrapes table
await db.query(`
  CREATE TABLE scrapes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    url VARCHAR(500) NOT NULL,
    status VARCHAR(50) DEFAULT 'pending',
    result JSON,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
  )
`);

console.log("Database setup completed successfully");

db.disconnect();
