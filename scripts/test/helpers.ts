import { readdirSync } from "fs";
import { join } from "path";

import type { ConfigBuildOptions, TestConfig } from "@/types/tests.d.ts";

export const TestSelector = (tests: string[]) => {
	return {
		one: (index: number = 0) => {
			return [tests[index]];
		},
		all: () => {
			return tests;
		},
		select: (selectedTests: string[]) => {
			// Filter tests that match any of the selected test names
			// This handles both exact matches and matches without extensions
			return tests.filter((test) => {
				const testNameWithoutExt = test.split('.')[0];
				return selectedTests.some(selectedTest => {
					const selectedWithoutExt = selectedTest.split('.')[0];
					return test === selectedTest || testNameWithoutExt === selectedWithoutExt;
				});
			});
		},
	};
};

export const addExtensions = (filenames: string[], extensions: string[]) => {
	let result: string[] = [];

	extensions.forEach((extension) => {
		// Normalize extension by removing leading dot if present
		const normalizedExtension = extension.replace(/^\./, "");

		const withExtension = filenames.flatMap((testPath: string) => {
			const testSplit = testPath.split(".");
			const hasExtension = testSplit.includes(normalizedExtension);

			if (hasExtension) {
				// If filename already has this extension, return both with and without extension
				return [testSplit[0], testPath];
			}

			// If filename doesn't have this extension, return both original and with extension
			return [testPath, testPath + "." + normalizedExtension];
		});

		result = [...result, ...withExtension];
	});

	// Remove any duplicates
	return [...new Set(result)];
};

export const getTestFilePaths = (
	testFolderPath: string,
	extensions: string[]
) => {
	return readdirSync(testFolderPath).filter((file) =>
		extensions.some((ext) => file.endsWith(ext))
	);
};

export const buildTestConfig = (
	buildOptions: ConfigBuildOptions
): TestConfig => {
	const testFolderPath = `${process.cwd()}${buildOptions.testFolderPath}`;
	const extensions = buildOptions.extensions || ["ts"];
	const select = buildOptions.select;
	let testFilePaths = getTestFilePaths(testFolderPath, extensions);
	const selector = TestSelector(testFilePaths) as any;
	const selectFunc = selector[select as any];

	if (Array.isArray(select) && select.length > 0) {
		testFilePaths = TestSelector(testFilePaths).select(select);
	} else if (typeof select === "string" && typeof selectFunc === "function") {
		const result = selectFunc();

		testFilePaths = Array.isArray(result) ? result : result ? [result] : [];
	}

	const prioritized = addExtensions(
		buildOptions.prioritized || [],
		extensions
	);
	const excluded = addExtensions(
		buildOptions.excluded || [],
		extensions
	);

	return {
		excluded,
		prioritized,
		testFilePaths,
		extensions,
	};
};
