import dom from "jsdom";

import { PrismaClient } from "@db/prisma/index.js";
import Task from "@services/queue/task.ts";
import TaskExecutor from "@services/queue/task-executor.ts";
import Webscraper from "@services/webscraper.ts";
import { getScraperForUrl } from "@scrapers/index.ts";
import { defuddleDOM, getFileParts } from "@lib/util.ts";
import { safeUpsert } from "@db/helpers.ts";

import type {
	WebscrapeTaskData,
	WebscrapeTaskResult,
	TaskResult,
} from "@types";

export default class WebscrapeTask extends TaskExecutor {
	constructor(taskType?: string) {
		if (!taskType) {
			taskType = getFileParts(import.meta.filename).nameWithoutExtension;
		}

		super(taskType);
	}

	override async exec(
		task: Task<WebscrapeTaskData>
	): Promise<TaskResult<WebscrapeTaskResult>> {
		const url = task.data.url;
		const scraper = new Webscraper({});

		if (!url) {
			task.addError(
				new Error("Webscrape task is missing 'url' variable in data")
			);
			return { processed: false };
		}

		const content = await scraper.fetchPageContent(url);
		const defuddledDOM = defuddleDOM(new dom.JSDOM(content));

		const scraperResult = getScraperForUrl(url);

		if (!scraperResult.success) {
			await scraper.closeBrowser();
			task.addError(
				new Error(`Scraper error for URL: ${url} - ${scraperResult.error}`)
			);
			return {
				processed: false,
				scrapedPosts: null,
			};
		}

		const result = await scraperResult.scraper(defuddledDOM);
		await scraper.closeBrowser();

		return {
			processed: true,
			scrapedPosts: result,
		};
	}

	override async saveResult(
		task: Task<WebscrapeTaskData>,
		result: TaskResult<WebscrapeTaskResult>,
		db: PrismaClient
	): Promise<void> {
		if ("url" in task.data) {
			const insert = {
				task_uid: task.uid,
				result: result ? JSON.parse(JSON.stringify(result)) : null,
				url: task.data.url,
				user_id: task.userId || null,
			};

			await safeUpsert(db.scrapes, { task_uid: task.uid }, insert);
		}
	}
}
