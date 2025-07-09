import type { Request, Response, NextFunction } from "express";
import type { QueueOptions } from "@types";

import { Task } from "@/services/queue/index.ts";

const useQueue = (options: QueueOptions) => {
	const middleware = (req: Request, res: Response, next: NextFunction) => {
		const worker = req.appRef.getWorker();

		req.sendTaskToWorker = (taskData: Task) => {
			worker.send(taskData);
		};

		req.usesQueue = true;
		req.runQueue = options.runNow || false;

		next();
	};

	return middleware;
};

const queueManager = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const usesQueue = req.usesQueue;

	const queue = req.appRef.getQueue();
	const worker = req.appRef.getWorker();

	if (usesQueue && req.sendTaskToWorker) {
		queue.runPendingTasks(worker);
	}

	next();
};

export { queueManager };

export default useQueue;
