import Email from "../src/services/email.ts";
import StageScraper from "../src/App.ts";
import { Task } from "../src/services/queue/index.ts";

export default async function test(app: StageScraper) {
	const queue = app.getQueue();
	const worker = app.getWorker();

	// Wait a little for the Queue to ready up
	await new Promise((resolve) => setTimeout(resolve, 1000));

	// Add a webscraping task for a specific url, currently only scrapes post from: "stagemax" & "stagemarkt"
	// TODO: update page crawling logic or/and add new src/scrapers & processing logic
	queue.add(
		new Task({
			name: `Stagemax scrape`,
			description:
				"Scraping recent software development posts from: stagemax.nl",
			type: "webscrape",
			priority: 1,
			data: {
				url: "https://www.stagemax.nl/stages/zoeken/software",
			},
		})
	);

	// Adding a queue task for a url that doesn't have a scraper
	queue.add(
		new Task({
			name: `Indeed scrape`,
			description: "Scraping recent software development posts from: indeed.nl",
			type: "webscrape",
			data: {
				url: "https://indeed.nl/",
			},
		})
	);

	// Creating an email model
	const email = new Email({
		to: ["fitese9407@dariolo.com"],
		subject: "Stage-scraper test email",
		body: "This is a test email from the stage-scraper API.",
		userId: 1,
	});
	// Create a task from the email model
	const emailTask = email.task();
	// Add the new task to the queue to send it.
	queue.add(emailTask);

	// Run currently all pending tasks, this only runs tasks with a runAt property that's undefined or date earlier than now
	await queue.runPendingTasks(worker);

	// Wait a little for the Queue to run
	await new Promise((resolve) => setTimeout(resolve, 15000));
}
