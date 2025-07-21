import type { TestConfig } from "@types";
import StageScraper from "@app";
import { inArray } from "@lib/util.ts";
import { buildTestConfig } from "./helpers.ts";
import config from "../../testconfig.json" with { type: "json" };

/**
 * Runs a series of tests based on a provided configuration.
 * It initializes the application, sorts tests by priority, and executes them sequentially.
 *
 * @param testConfig The configuration object for the tests.
 */
const runTests = async (testConfig: TestConfig) => {
	const {
		prioritized: prioritizedTests,
		excluded: disabledTests,
		testFilePaths,
	} = testConfig;

	console.log("🚀 Starting test runner...");
	const app = StageScraper.getInstance().start();
	await app.ready();

	// Sort tests to execute prioritized tests first.
	const sortedTests = [...testFilePaths].sort((a, b) => {
		const aIsPrioritized = prioritizedTests.includes(a);
		const bIsPrioritized = prioritizedTests.includes(b);

		if (aIsPrioritized && !bIsPrioritized) return -1;
		if (!aIsPrioritized && bIsPrioritized) return 1;

		// If both are prioritized, sort by their index in the prioritized list.
		if (aIsPrioritized && bIsPrioritized) {
			return prioritizedTests.indexOf(a) - prioritizedTests.indexOf(b);
		}

		// Otherwise, maintain the original order.
		return 0;
	});

	console.log(`Found ${sortedTests.length} tests to run.`);

	// Run tests sequentially.
	for (const path of sortedTests) {
		if (inArray(disabledTests, path)) {
			console.log(`⏭️  Skipping disabled test: ${path}`);
			continue;
		}

		const isPrioritized = inArray(prioritizedTests, path);
		const status = isPrioritized ? "🔥 PRIORITIZED" : "⚡";
		const separator = "═".repeat(60);

		console.log(`\n${separator}`);
		console.log(`🚀 Running ${status} test: ${path}`);
		console.log(`${separator}\n`);

		try {
			const testModule = await import(`../../tests/${path}`);

			if (typeof testModule.default !== "function") {
				throw new Error(
					`Test file ${path} does not have a default export that is a function.`
				);
			}

			await testModule.default(app);

			console.log(`\n${separator}`);
			console.log(`✅ Test completed: ${path}`);
			console.log(`${separator}\n`);
		} catch (error)
		{
			console.error(`❌ Test failed: ${path}`);
			console.error(error);
			console.log(`\n${separator}`);
			// Optionally, re-throw or exit process if a test fails
			// process.exit(1);
		}
	}

	console.log("✅ All tests completed. Shutting down application...");
	app.stop();
};

runTests(buildTestConfig(config));
