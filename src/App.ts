import path from "path";
import { fork, ChildProcess } from "child_process";
// External
import express from "express";
import cors from "cors";
import session from "express-session";
// Database
import { PrismaClient } from "@db/prisma/index.js";
import Queue from "@services/queue/index.ts";
import { ensureDir } from "@lib/util.ts";
// Custom Middleware
import { queueManager } from "@middleware/queue.ts";
import { setup, cleanup } from "@middleware/response.ts";
// Routes
import AuthRoutes from "@routes/auth.ts";
import ScrapeRoutes from "@routes/scrape.ts";
import UploadRoutes from "@routes/upload.ts";

process.loadEnvFile(".env");

class StageScraper {
	private static instance: StageScraper;

	public readonly name: string;
	private isReady: boolean;
	private app: express.Application;
	private router: express.Router;
	private port: number;
	private db: PrismaClient;
	private queue: Queue;
	private worker: ChildProcess;
	private queueLoopDelay: number;

	private constructor() {
		this.isReady = false;

		this.name = process.env.APP_NAME || "";
		this.port = Number(process.env.PORT) || 3000;
		this.queueLoopDelay = Number(process.env.QUEUE_DELAY_SECONDS) || 60;

		this.app = express();
		this.router = express.Router();

		// Add services
		this.db = new PrismaClient();
		this.queue = new Queue(10);

		// Spawn the worker process
		this.worker = this.spawnWorker();
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

	public getDB(): PrismaClient {
		return this.db;
	}

	public getQueue(): Queue {
		return this.queue;
	}

	public getWorker(): ChildProcess {
		return this.worker;
	}

	// Methods
	// ================================

	public async start(): Promise<this> {
		await this.init();

		this.app.listen(this.port, () => {
			console.log(`Server is running on port ${this.port}`);
			this.isReady = true;
		});

		return this;
	}

	public async stop() {
		this.isReady = false;

		await this.db.$disconnect();

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

	public async addStaticDir(route: string, dir: string = "uploads"): Promise<void> {
		const directory = path.join(process.cwd(), "uploads", route);

		await ensureDir(directory);
		this.app.use(route, express.static(directory));
		console.log(`   Route: ${route} -> /${dir}${route}`);
	}

	// Private methods
	// ================================
	
	private async init(): Promise<void> {
		await this.queue["taskExecutors"].initialize();
		await this.serveStaticFiles(); 
		this.initQueueLoop(); // Automatically runs any pending tasks still in memory

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
		this.addMiddleware(setup(this)); // Attaches any variables and methods needed by other middleware to the request
		this.initRoutes(); // Setup Routes
		this.addMiddleware(queueManager); // Catches and handles any requests that use the queue
		this.addMiddleware(cleanup); // Sends the httpResponse attached to the express request object if nothing has been sent before.
	}

	private async serveStaticFiles(): Promise<void> {
		console.log(`Setting up static file serving:`);

		await this.addStaticDir("/avatars");
		await this.addStaticDir("/users/cv");
	}

	private async initQueueLoop() {
		const delay = this.queueLoopDelay;
		let readableDuration: number;
		let suffix: string;
	
		if (!delay) return;
	
		if (delay >= 60) {
			readableDuration = delay / 60;
			suffix = delay === 60 ? "minute" : "minutes";
		} else {
			readableDuration = delay;
			suffix = "seconds";
		}
	
		while (this.isReady) {
			console.log(
				`🧹 Running pending tasks (every ${readableDuration} ${suffix})`
			);
			await this.queue.runPendingTasks(this.worker);
			await new Promise((resolve) => setTimeout(resolve, delay * 1000));
		}
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

		// Incase worker crashes or loses connection, restart it.
		worker.on("exit", (code, signal) => {
			console.error(
				`Worker exited with code ${code} and signal ${signal}. Restarting...`
			);

			setTimeout(() => {
				this.worker = this.spawnWorker();
			}, 1000);
		});

		worker.on("error", (err) => {
			console.error("Worker process error:", err);
		});

		return worker;
	}
}

export default StageScraper;
