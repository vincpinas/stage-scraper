export interface ConfigBuildOptions {
	select?: "one" | "all" | string[];
	excluded?: string[];
	prioritized?: string[];
    extensions?: string[];
	testFolderPath: string;
}

export interface TestConfig {
	testFilePaths: string[];
	excluded: string[];
	prioritized: string[];
    extensions: string[];
}
