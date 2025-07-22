import type { Request, Response, NextFunction } from "express";

import { Task } from "@services/queue/index.ts";

const useQueue = () => {
	const middleware = (req: Request, res: Response, next: NextFunction) => {
		const worker = req.appRef.getWorker();

		req.usesQueue = true;
		req.sendTaskToWorker = (taskData: Task) => {
			worker.send(taskData);
		};

		next();
	};

	return middleware;
};

const queueManager = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const queue = req.appRef.getQueue();
	const worker = req.appRef.getWorker();

	if (req.usesQueue && req.sendTaskToWorker) {
		queue.runPendingTasks(worker);
	}

	next();
};

export { queueManager };

export default useQueue;
