import inquirer, { Answers } from "inquirer";
import { writeFile, readFile } from "fs/promises";
import path from "path";
import { DistinctQuestion } from "inquirer";

export type ParamSchema = DistinctQuestion<Answers & object> & { name: string; }
export interface GeneratorOptions {
	type: string;
	templatePath: string;
	outputDir: string;
}

/**
 * Base class for code generators using templates and user input.
 */
export default class Generator {
	type: string;
	directory: string;
	templatePath: string;

	name?: string;
	filename?: string;
	filepath?: string;
	className?: string;
	description?: string;

	/**
	 * Constructs a new Generator instance.
	 * @param generatorOptions - Options for the generator, including type, template path, and output directory.
	 */
	constructor(generatorOptions: GeneratorOptions) {
		this.type = generatorOptions.type;
		this.directory = generatorOptions.outputDir;
		this.templatePath = generatorOptions.templatePath;
	}

	/**
	 * Starts the generator process: prompts for parameters, generates the file, and runs completion logic.
	 */
	public async start() {
		await this.getParams(this.defineRequireSchema());
		await this.generate();
		await this.onComplete();
	}

	/**
	 * Defines the schema for required parameters to prompt the user.
	 * Override in subclasses to specify required fields.
	 * @returns An array of parameter schemas.
	 */
	public defineRequireSchema(): ParamSchema[] {
		return [];
	}

	/**
	 * Hook for logic to run after generation is complete.
	 * Override in subclasses for custom behavior.
	 */
	public async onComplete() {}

    /**
	 * Generates the output file from the template and user parameters.
	 */
	private async generate() {
		if (!this.ready() || !this.filepath) return;

		console.log(
			`Generating new ${this.type} for ${this.name} at ${this.directory}/${this.filename}`
		);

		const rawTemplate = await this.getRawTemplate();
		const appliedTemplate = await this.applyTemplate(rawTemplate);

		console.log(this.filepath);

		await writeFile(this.filepath, appliedTemplate, { encoding: "utf8" });
	}

	/**
	 * Prompts the user for required parameters and assigns them to the instance.
	 * @param neededParams - Array of parameter schemas for inquirer.
	 * @returns The generator instance.
	 */
	private async getParams(neededParams: ParamSchema[]) {
		const params = await inquirer.prompt([...neededParams]);

		const paramKeys = Object.keys(params);

		paramKeys.forEach((key) => {
			this[key as keyof typeof this] = params[key];
		});

		this.handleParams();

		return this;
	}

	/**
	 * Reads the raw template file from disk.
	 * @returns The template file contents as a string.
	 */
	private async getRawTemplate() {
		console.log(`Fetching template for ${this.name}`);

		return readFile(this.templatePath, "utf8");
	}

	/**
	 * Applies parameter values to the template by replacing placeholders.
	 * @param rawTemplate - The raw template string.
	 * @returns The template with placeholders replaced by parameter values.
	 */
	private async applyTemplate(rawTemplate: string) {
		const paramKeys = this.getParamsFromRawTemplate(rawTemplate);
		let result = rawTemplate;

		console.log(`Applying ${paramKeys.length} params to template`);

		for (const key of paramKeys) {
			const selector = key.original;
			const normalized = key.normalized;

			const replaceValue: string = String(
				this[normalized as keyof typeof this]
			);

			result = result.replaceAll(selector, replaceValue);
		}

		return result;
	}

	/**
	 * Extracts parameter placeholders from the template.
	 * @param rawTemplate - The raw template string.
	 * @returns An array of objects with original and normalized parameter names.
	 */
	private getParamsFromRawTemplate(rawTemplate: string) {
		const matches = [...rawTemplate.matchAll(/\$\{([^}]+)\}/g)];
		const words = matches.map((match) => {
			return {
				original: match[0],
				normalized: match[1],
			};
		});

		return [...new Set(words)];
	}

	/**
	 * Handles and normalizes parameters after user input.
	 * Sets className, filename, and filepath based on the name.
	 */
	private handleParams() {
		if (!this.name) return;

		this.className =
			this.name
				.split(/[-_ ]+/)
				.map((w: string) => w.charAt(0).toUpperCase() + w.slice(1))
				.join("") + "Task";

		this.filename = `${this.name}.ts`;
		this.filepath = path.join(process.cwd(), this.directory, this.filename);
	}

	/**
	 * Checks if the generator is ready to generate a file (all required fields are set).
	 * @returns True if ready, false otherwise.
	 */
	private ready() {
		if (!this.name) {
			console.error("Generator not ready: 'name' is missing.");
			return false;
		}
		if (!this.filename) {
			console.error("Generator not ready: 'filename' is missing.");
			return false;
		}
		if (!this.filepath) {
			console.error("Generator not ready: 'filepath' is missing.");
			return false;
		}
		if (!this.className) {
			console.error("Generator not ready: 'className' is missing.");
			return false;
		}

		return true;
	}
}
