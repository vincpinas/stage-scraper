import Task from "../task.ts";

export default async function webscrapeExecutor(task: Task) {
	const data = task.data;

	// Simulate file processing
	task.updateProgress(30);
	await task.sleep(800);
	task.updateProgress(60);
	await task.sleep(800);
	task.updateProgress(100);

	console.log(data);

	return {
		filename: data.filename,
		processed: true,
		size: data.size,
		timestamp: new Date(),
	};
}