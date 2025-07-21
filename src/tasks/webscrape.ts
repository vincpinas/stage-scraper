import dom from "jsdom";

import Task from "@services/queue/task.ts";
import Webscraper from "@/services/webscraper.ts";
import { getScraperForUrl } from "@scrapers/index.ts";
import { defuddleDOM } from "@lib/util.ts";
import { completionExecutorType, TaskResult } from "@/types/queue.js";
import { Prisma } from "@prisma/client";
import { PrismaClient } from "@/db/prisma/index.js";

async function webscrapeTask(task: Task): Promise<TaskResult> {
	const url = task.data.url;
	const scraper = new Webscraper({});

	if (!url) {
		task.addError(
			new Error("Webscrape task is missing 'url' variable in data")
		);

		return {
			processed: false,
		};
	}

	const content = await scraper.fetchPageContent(url);
	const defuddledDOM = defuddleDOM(new dom.JSDOM(content));

	// Get the appropriate scraper function for this URL to extract data from DOM.
	const scraperResult = getScraperForUrl(url);

	if (!scraperResult.success) {
		await scraper.closeBrowser();

		task.addError(
			new Error(`Scraper error for URL: ${url} - ${scraperResult.error}`)
		);

		return {
			processed: false,
		};
	}

	const result = await scraperResult.scraper(defuddledDOM);

	await scraper.closeBrowser();

	return {
		processed: true,
		scrapedPosts: result,
	};
}

async function onComplete(db: PrismaClient, task: Task, result: TaskResult) {}

export default {
	exec: webscrapeTask,
	onComplete,
};
