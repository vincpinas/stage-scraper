import "dotenv/config";

import StageScraper from "@app";

const app = StageScraper.getInstance();

await app.start();
