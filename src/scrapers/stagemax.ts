import dom from "jsdom";

import type { SearchResults } from "@types";

export default async function stagemaxScraper(dom: dom.JSDOM): Promise<SearchResults[]> {
	const document = dom.window.document;
	
	// Find all post elements
	const posts = Array.from(document.querySelectorAll("a.post"));
	
	const postJson = posts.map((post: Element) => {
		// Extract title
		const h2 = post.querySelector("h2");
		const title = h2?.textContent?.trim() || "";
		
		// Extract description
		const description = post.querySelector("p")?.textContent?.trim() || "";
		
		// Extract details from .spec containers
		const specContainers = post.querySelectorAll(".spec");
		const details: string[] = [];
		
		specContainers.forEach((spec: Element) => {
			// Get the span content directly
			const span = spec.querySelector("span");
			if (span) {
				const text = span.textContent?.trim();
				if (text) {
					details.push(text);
				}
			}
		});

		return {
			title,
			description,
			details,
			url: "https://www.stagemax.nl" + post.getAttribute("href") || "",
		};
	});

	return postJson;
} 