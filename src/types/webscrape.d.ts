export interface SearchResults {
	title: string;
	description: string;
	details: string[];
	url: string;
}

export type SearchResultsArray = SearchResults[];

interface WebscraperOptions {
	userAgent?: string;
	headless?: boolean | "shell";
	maxRetries?: number;
	retryDelayMs?: number;
	proxy?: ProxyOptions;
}

export interface ProxyOptions {
	server: string; // e.g., 'http://host:port' or 'socks5://host:port'
	username?: string;
	password?: string;
}

export interface ExtractionRule {
	// Exporting for use in other modules
	name: string;
	selector: string;
	attribute?: string;
	isMultiple?: boolean;
}