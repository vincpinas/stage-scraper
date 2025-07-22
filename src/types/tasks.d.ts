import File from "@models/file.ts";
import type { SearchResults } from "./webscrape.d.ts";


export interface WebscrapeTaskData {
    url: string;
}

export interface WebscrapeTaskResult {
    scrapedPosts: SearchResults[]
}

export interface SendEmailTaskData {
    email: Email;
}

export interface SendEmailTaskResult {
    email: Email
}

export interface CompressImageTaskData {
    image: File;
    sizes: { width: number; height: number }[];
}

export interface CompressImageTaskResult {
    files: File[];
}

export type TaskData = WebscrapeTaskData | SendEmailTaskData | CompressImageTaskData;