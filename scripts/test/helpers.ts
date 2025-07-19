import { readdirSync } from "fs";

import { changeExtensions } from "@/lib/util.ts";

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
	const selector = TestSelector(testFilePaths) as Record<string, unknown>;
	const selectFunc = selector[select as string] as (() => string[]) | undefined;

	if (Array.isArray(select) && select.length > 0) {
		testFilePaths = TestSelector(testFilePaths).select(select);
	} else if (typeof select === "string" && typeof selectFunc === "function") {
		const result = selectFunc();

		testFilePaths = Array.isArray(result) ? result : result ? [result] : [];
	}

	const prioritized = changeExtensions(
		buildOptions.prioritized || [],
		extensions
	);
	const excluded = changeExtensions(
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
