import Email from "../src/services/email.ts";
import StageScraper from "../src/App.ts";
import { Task } from "../src/services/queue/index.ts";

export default async function test(app: StageScraper) {
	const queue = app.getQueue();
	const worker = app.getWorker();

	// Wait a little for the Queue to ready up
	await new Promise((resolve) => setTimeout(resolve, 1000));

	// queue.add(
	// 	new Task({
	// 		name: `Stagemax scrape`,
	//         description: "Scraping recent software development posts from: stagemax.nl",
	// 		type: "webscrape",
	// 		priority: 1,
	// 		data: {
	// 			url: "https://www.stagemax.nl/stages/zoeken/software",
	// 		},
	// 	})
	// );

	queue.add(
		new Task({
			name: `Stagemarkt scrape`,
			description:
				"Scraping recent software development posts from: stagemarkt.nl",
			type: "webscrape",
			data: {
				url: "https://stagemarkt.nl/stages?opleidingsniveau=4&range=15&type=1&crebocode=25998&plaatsPostcode=1422",
			},
		})
	);

	// queue.add(
	// 	new Task({
	// 		name: `Indeed scrape`,
	// 		description:
	// 			"Scraping recent software development posts from: indeed.nl",
	// 		type: "webscrape",
	// 		data: {
	// 			url: "https://indeed.nl/",
	// 		},
	// 	})
	// );

	const email = new Email({
		to: ["ikbengerrit92@gmail.com"],
		subject: "Stage-scraper test email",
		body: "This is a test email from the stage-scraper API.",
		sendAt: new Date(Date.now() + 4000),
		userId: 1
	});

	queue.add(email.task())

	await queue.runPendingTasks(worker);

	// Wait a little for the Queue to run
	await new Promise((resolve) => setTimeout(resolve, 15000));
}
