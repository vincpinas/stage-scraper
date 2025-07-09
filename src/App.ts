// External
import express from "express";
import path from "path";
import fs from "fs";
import { fork, ChildProcess } from "child_process";

// Core
import DB from "@db";

// External Middleware
import cors from "cors";
import session from "express-session";

// Custom Middleware
import { queueManager } from "@/middleware/queue.ts";
import { setup, cleanup } from "@/middleware/response.ts";

// Routes
import AuthRoutes from "@routes/auth.ts";
import ScrapeRoutes from "@routes/scrape.ts";
import UploadRoutes from "@routes/upload.ts";

import Queue from "@/services/queue/index.ts";

class StageScraper {
	private static instance: StageScraper;

	public readonly name: string;

	private isReady: boolean;
	private app: express.Application;
	private router: express.Router;
	private port: number;
	private db: DB;
	private queue: Queue;
	private worker: ChildProcess;
	private queueAutoDelay: number;
	private queueInterval?: NodeJS.Timeout;

	private constructor() {
		this.isReady = false;
		this.name = process.env.APP_NAME || "";
		this.port = Number(process.env.PORT) || 3000;
		this.queueAutoDelay = Number(process.env.QUEUE_DELAY_SECONDS) || 60;

		this.app = express();
		this.router = express.Router();

		// Add services
		this.db = new DB();
		this.queue = new Queue(10);

		// Spawn the worker process
		this.worker = this.spawnWorker();

		this.init();
	}

	// Getters
	// ================================

	public static getInstance(): StageScraper {
		if (!StageScraper.instance) {
			StageScraper.instance = new StageScraper();
		}
		return StageScraper.instance;
	}

	public getApp(): express.Application {
		return this.app;
	}

	public getRouter(): express.Router {
		return this.router;
	}

	public getPort(): number {
		return this.port;
	}

	public getDB(): DB {
		return this.db;
	}

	public getQueue(): Queue {
		return this.queue;
	}

	public getWorker(): ChildProcess {
		return this.worker;
	}

	public ready(lifetime: number = 5000): Promise<boolean> {
		return new Promise((resolve) => {
			const timeout = setTimeout(() => {
				resolve(false);
				this.stop();
			}, lifetime);

			const checkReadyWithTimeout = () => {
				if (this.isReady) {
					clearTimeout(timeout);
					resolve(true);
				} else {
					setTimeout(checkReadyWithTimeout, 100);
				}
			};
			checkReadyWithTimeout();
		});
	}

	// Methods
	// ================================

	public start(): StageScraper {
		this.app.listen(this.port, () => {
			console.log(`Server is running on port ${this.port}`);
			this.isReady = true;
		});

		return this;
	}

	public stop() {
		if (this.queueInterval) {
			clearInterval(this.queueInterval);
		}

		this.db.disconnect();

		if (this.worker && this.worker.connected) {
			this.worker.kill();
		}

		process.exit(0);
	}

	public addRoute(path: string, router: express.Router): void {
		this.app.use(path, router);
	}

	public addMiddleware(middleware: express.RequestHandler): void {
		this.app.use(middleware);
	}

	public addStaticDir(route: string, dir: string = "uploads"): void {
		const directory = path.join(process.cwd(), dir, route);

		if (!fs.existsSync(directory)) fs.mkdirSync(directory);

		console.log(
			`Setting up static file serving: \n   Route: -> ${route} \n   Directory: -> /${dir}${route}`
		);
		this.app.use(route, express.static(directory));
	}

	// Private methods
	// ================================

	private init(): void {
		this.addMiddleware(
			cors({
				origin: process.env.FRONTEND_URL,
				credentials: true,
			})
		);

		this.addMiddleware(
			session({
				secret: process.env.SECRET || "secret",
				resave: false,
				saveUninitialized: false,
				cookie: {
					secure: process.env.NODE_ENV === "production" ? true : false,
					maxAge: 1000 * 60 * 60 * 24 * 30,
				},
			})
		);

		this.addMiddleware(express.json());

		this.addMiddleware(express.urlencoded({ extended: true }));

		// Serve static files and test routes (BEFORE setupHttpResponse to avoid interference)
		this.serveStaticFiles();

		// Attaches any needed variables and methods to the request
		this.addMiddleware(setup(this));

		// Setup Routes
		this.initRoutes();

		// Catches and handles any requests that use the queue
		this.addMiddleware(queueManager);

		/* 
			Cleans and sends the req.httpResponse variable.
			Automatically fetches and sends latest user data if req.requiresLogin is set during setup().
		*/
		this.addMiddleware(cleanup);

		// Automatically run any tasks still pending
		if (!this.queueAutoDelay) return;

		this.queueInterval = setInterval(async () => {
			const queue = this.queue;
			const worker = this.worker;

			console.log(
				`🧹 Running pending tasks (every ${this.queueAutoDelay} seconds)`
			);

			queue.runPendingTasks(worker);
		}, this.queueAutoDelay * 1000);
	}

	private serveStaticFiles(): void {
		this.addStaticDir("/avatars");
	}

	private initRoutes(): void {
		this.addRoute("/auth", AuthRoutes);
		this.addRoute("/scrape", ScrapeRoutes);
		this.addRoute("/upload", UploadRoutes);
	}

	private spawnWorker() {
		const workerPath = path.join(
			process.cwd(),
			"src",
			"services",
			"queue",
			"worker.ts"
		);
		let worker = fork(workerPath);

		worker.on("exit", (code, signal) => {
			console.error(
				`Worker exited with code ${code} and signal ${signal}. Restarting...`
			);
			setTimeout(() => {
				this.worker = this.spawnWorker();
			}, 1000); // Wait 1 second before restarting
		});

		worker.on("error", (err) => {
			console.error("Worker process error:", err);
		});

		return worker;
	}
}

export default StageScraper;
