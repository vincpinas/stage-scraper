import type { SearchResults } from "@/types/webscrape.d.ts";
import dom from "jsdom";

// Scrapers
import stagemarktScraper from "./stagemarkt.ts";
import stagemaxScraper from "./stagemax.ts";

// Registry of scrapers by domain
export const scrapers: Record<
	string,
	(dom: dom.JSDOM) => Promise<SearchResults[]>
> = {
	stagemarkt: stagemarktScraper,
	stagemax: stagemaxScraper,
};

export function getScraperForUrl(
	url: string
):
	| { success: true; scraper: (dom: dom.JSDOM) => Promise<SearchResults[]> }
	| { success: false; error: string } {
	const domainMatch = url.match(/^https?:\/\/(?:www\.)?([^./?#]+)\./i);
	if (!domainMatch) {
		return { success: false, error: `Invalid URL format: ${url}` };
	}

	const domain = domainMatch[1];
	const scraper = scrapers[domain];

	if (!scraper) {
		return {
			success: false,
			error: `No scraper available for domain: ${domain}`,
		};
	}

	return { success: true, scraper };
}
