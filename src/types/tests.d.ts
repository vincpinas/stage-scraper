export interface ConfigBuildOptions {
	select?: "one" | "all" | string[];
	exclude?: string[];
	prioritized?: string[];
    extensions?: string[];
	testFolderPath: string;
}

export interface TestConfig {
	testFilePaths: string[];
	exclude: string[];
	prioritized: string[];
    extensions: string[];
}
