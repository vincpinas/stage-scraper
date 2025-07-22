import type { ExtractionRule, WebscraperOptions } from "@types";
import puppeteer, { Browser, Page } from "puppeteer";

export class Webscraper {
	private browser: Browser | null = null;
	private options: WebscraperOptions;

	constructor(options: WebscraperOptions = {}) {
		this.options = {
			userAgent:
				options.userAgent ||
				"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
			headless: options.headless === undefined ? "shell" : options.headless,
			maxRetries: options.maxRetries || 3,
			retryDelayMs: options.retryDelayMs || 1000,
			proxy: options.proxy,
		};
	}

	private async launchBrowser(): Promise<Browser> {
		if (!this.browser || !this.browser.isConnected()) {
			// Check if a browser instance is already running (e.g. from a previous failed attempt)
			if (this.browser && typeof this.browser.close === "function") {
				try {
					await this.browser.close();
				} catch (e) {
					console.warn("Previous browser instance could not be closed:", e);
				}
			}

			let launchArgs = [
				"--no-sandbox",
				"--disable-setuid-sandbox",
				"--disable-dev-shm-usage", // Often needed in Docker/CI environments
				"--disable-accelerated-2d-canvas",
				"--no-first-run",
				"--no-zygote",
				// '--single-process', // commented out, as it's deprecated and can cause issues
				"--disable-gpu",
			];

			if (this.options.proxy && this.options.proxy.server) {
				launchArgs.push(`--proxy-server=${this.options.proxy.server}`);
			}

			this.browser = await puppeteer.launch({
				headless: this.options.headless,
				args: launchArgs,
			});
		}
		
		return this.browser;
	}

	private async createPage(): Promise<Page> {
		const browser = await this.launchBrowser();
		const page = await browser.newPage();
		await page.setUserAgent(this.options.userAgent!);

		if (
			this.options.proxy &&
			this.options.proxy.username &&
			this.options.proxy.password
		) {
			// This handles HTTP Basic Authentication for the proxy.
			// Note: This may not work for all proxy types/auth schemes.
			// SOCKS5 proxy authentication is typically handled by the --proxy-server URL if the proxy server itself supports it,
			// or might require more complex solutions if not directly supported by Chromium's args.
			await page.authenticate({
				username: this.options.proxy.username,
				password: this.options.proxy.password,
			});
		}
		return page;
	}

	public async fetchPageContent(url: string): Promise<string> {
		const page = await this.createPage();
		try {
			await page.goto(url, { waitUntil: "networkidle2", timeout: 60000 });

			// Wait for dynamic content (e.g., posts) to finish loading
			// Heuristic: wait for no network for a bit, then check for "loading" indicators, then wait for DOM stability
			// You can customize selectors as needed for your target sites

			// 1. Wait for common loading spinners to disappear (if any)
			const loadingSelectors = [
				'.loading', 
				'.spinner', 
				'.loader', 
				'[data-loading="true"]'
			];
			
			for (const selector of loadingSelectors) {
				try {
					await page.waitForSelector(selector, { hidden: true, timeout: 5000 });
				} catch {
					// Ignore timeout, just means this selector wasn't present
				}
			}

			const content = await page.content();
			return content;
		} catch (error) {
			console.error(`Error fetching page content from ${url}:`, error);
			throw error;
		} finally {
			await page.close();
		}
	}

	public async extractDataFromPage(
		page: Page,
		rules: ExtractionRule[]
	): Promise<Record<string, unknown | unknown[]>> {
		const results: Record<string, unknown | unknown[]> = {};

		for (const rule of rules) {
			if (rule.isMultiple) {
				results[rule.name] = await page.$$eval(
					rule.selector,
					(elements, attribute) =>
						elements.map((el) =>
							attribute
								? el.getAttribute(attribute)
								: el.textContent?.trim() || null
						),
					rule.attribute // Pass attribute to the $$eval function
				);
			} else {
				results[rule.name] = await page.$eval(
					rule.selector,
					(element, attribute) =>
						attribute
							? element.getAttribute(attribute)
							: element.textContent?.trim() || null,
					rule.attribute // Pass attribute to the $eval function
				);
			}
		}
		return results;
	}

	/**
	 * Main method to scrape data from a given URL based on extraction rules.
	 * Handles page creation, navigation, data extraction, and page closing.
	 */
	public async scrapeUrl(
		url: string,
		rules: ExtractionRule[],
		preExtractionOps?: (page: Page) => Promise<void>
	): Promise<Record<string, unknown | unknown[]>> {
		let attempts = 0;
		// Ensure maxRetries is at least 1
		const maxAttempts = Math.max(1, this.options.maxRetries!);

		while (attempts < maxAttempts) {
			const page = await this.createPage();
			try {
				console.log(
					`Navigating to ${url} (Attempt ${attempts + 1}/${maxAttempts})...`
				);
				await page.goto(url, { waitUntil: "networkidle2", timeout: 60000 });
				console.log(`Successfully navigated to ${url}.`);

				if (preExtractionOps) {
					console.log(`Executing pre-extraction operations for ${url}...`);
					await preExtractionOps(page);
					console.log(`Pre-extraction operations completed for ${url}.`);
				}

				console.log(`Extracting data...`);
				const data = await this.extractDataFromPage(page, rules);
				console.log(`Data extracted from ${url}:`, data);
				await page.close(); // Close page on success
				console.log(`Page closed for ${url}.`);
				return data;
			} catch (error) {
				console.error(
					`Error scraping URL ${url} (Attempt ${attempts + 1}/${maxAttempts}):`,
					error
				);
				await page.close(); // Ensure page is closed on error too
				console.log(`Page closed for ${url} after error.`);
				attempts++;
				if (attempts >= maxAttempts) {
					throw new Error(
						`Failed to scrape ${url} after ${maxAttempts} attempts: ${
							error instanceof Error ? error.message : String(error)
						}`
					);
				}
				// Wait before retrying, with exponential backoff
				const delay = this.options.retryDelayMs! * Math.pow(2, attempts - 1);
				console.log(`Retrying in ${delay}ms...`);
				await new Promise((resolve) => setTimeout(resolve, delay));
			}
		}
		// This line should theoretically be unreachable if maxAttempts >= 1
		throw new Error(
			`Failed to scrape ${url} after ${maxAttempts} attempts. Unknown error state.`
		);
	}

	public async closeBrowser(): Promise<void> {
		if (this.browser) {
			await this.browser.close();
			this.browser = null;
		}
	}
}

export default Webscraper;
