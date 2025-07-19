import type { TestConfig } from "@/types/tests.d.ts";

import StageScraper from "@/App.ts";
import { inArray } from "@lib/util.ts";
import { buildTestConfig } from "./helpers.ts";

import config from "../../testconfig.json" with { type: "json" };


const runTests = async (testConfig: TestConfig) => {
	const prioritizedTests = testConfig.prioritized;
	const disabledTests = testConfig.excluded;
	const testFilePaths = testConfig.testFilePaths;

	const app = StageScraper.getInstance().start();

	await app.ready();

	// Sort tests to prioritize tests in prioritizedTests array
	const sortedTests = testFilePaths.sort((a, b) => {
		const aIndex = prioritizedTests.indexOf(a);
		const bIndex = prioritizedTests.indexOf(b);

		// If both tests are in prioritizedTests, sort by their order in the array
		if (aIndex !== -1 && bIndex !== -1) {
			return aIndex - bIndex;
		}

		// If only a is prioritized, a comes first
		if (aIndex !== -1) return -1;

		// If only b is prioritized, b comes first
		if (bIndex !== -1) return 1;

		// If neither is prioritized, maintain original order
		return 0;
	});

	console.log(`\n`);

	// Run the tests, test return value should be a promise so it can await and runs in the proper order.
	for (const path of sortedTests) {
		const isPrioritized = inArray(prioritizedTests, path);
		const isDisabled = inArray(disabledTests, path);

		if (isDisabled) {
			console.log(`⏭️  Skipping disabled test: ${path}`);
			continue;
		}

		const status = isPrioritized ? "🔥 PRIORITIZED" : "⚡";
		console.log(`\n${"═".repeat(60)}`);
		console.log(`🚀 Running ${status} test: ${path}`);
		console.log(`${"═".repeat(60)}\n`);

		const test = await import(`../../tests/${path}`);

		if (!test.default) {
			throw new Error(`❌ Test file ${path} does not export a default function`);
		}

		await test.default(app);

		console.log(`\n${"═".repeat(60)}`);
		console.log(`✅ Test completed: ${path}`);
		console.log(`${"═".repeat(60)}\n`);
	}

	app.stop();
};

runTests(
	buildTestConfig(config)
);
