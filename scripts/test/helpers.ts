import { readdirSync } from "fs";

import { changeExtensions, getFileParts } from "@lib/util.ts";

import type { ConfigBuildOptions, TestConfig } from "@types";

/**
 * Creates a selector object to filter a list of test files.
 * @param tests An array of test file paths.
 * @returns An object with methods to select tests.
 */
export const TestSelector = (tests: string[]) => {
	return {
		/**
		 * Selects a single test file by its index.
		 * @param index The index of the test to select. Defaults to 0.
		 * @returns An array containing the selected test file, or an empty array if not found.
		 */
		one: (index = 0) => {
			const test = tests[index];
			return test ? [test] : [];
		},

		/**
		 * Selects all test files.
		 * @returns The original array of test files.
		 */
		all: () => {
			return tests;
		},

		/**
		 * Selects a subset of tests based on a list of names.
		 * Matches against full filenames or filenames without extensions.
		 * @param selectedTests An array of test names to select.
		 * @returns A filtered array of test file paths.
		 */
		select: (selectedTests: string[]) => {
			return tests.filter((test) => {
				const { nameWithoutExtension } = getFileParts(test);
				return selectedTests.some((selectedTest) => {
					const { nameWithoutExtension: selectedWithoutExt } =
						getFileParts(selectedTest);
					return (
						test === selectedTest ||
						nameWithoutExtension === selectedWithoutExt
					);
				});
			});
		},
	};
};

/**
 * Reads a directory and returns a list of test files matching the given extensions.
 * @param testFolderPath The path to the folder containing test files.
 * @param extensions An array of file extensions to look for (e.g., ["ts", "js"]).
 * @returns An array of test file paths.
 */
export const getTestFilePaths = (
	testFolderPath: string,
	extensions: string[]
) => {
	try {
		return readdirSync(testFolderPath).filter((file) =>
			extensions.some((ext) => file.endsWith(`.${ext}`))
		);
	} catch (error) {
		if ((error as NodeJS.ErrnoException).code === "ENOENT") {
			console.warn(`Test directory not found: ${testFolderPath}`);
			return [];
		}
		throw error;
	}
};

/**
 * Builds the test configuration object based on the provided options.
 * This includes determining which test files to include, exclude, and prioritize.
 * @param buildOptions The options for building the test configuration.
 * @returns The final test configuration object.
 */
export const buildTestConfig = (
	buildOptions: ConfigBuildOptions
): TestConfig => {
	const testFolderPath = `${process.cwd()}${buildOptions.testFolderPath}`;
	const extensions = buildOptions.extensions || ["ts"];
	const select = buildOptions.select;
	let testFilePaths = getTestFilePaths(testFolderPath, extensions);
	const selector = TestSelector(testFilePaths);

	// Filter tests based on the 'select' option.
	// This can be an array of test names or a string ("one" or "all").
	// If 'select' is not provided, all tests are included by default.
	if (Array.isArray(select)) {
		testFilePaths = selector.select(select);
	} else if (typeof select === "string") {
		if (select === "one") {
			testFilePaths = selector.one();
		} else if (select === "all") {
			testFilePaths = selector.all();
		}
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
