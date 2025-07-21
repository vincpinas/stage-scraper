import dom from "jsdom";
import bcrypt from "bcrypt";
import fs from "fs";
import path from "path";

// General
// ================================

export function inArray(array: unknown[], item: unknown) {
	return array.indexOf(item) > -1;
}

// Used for webscraping, removes any uncessary elements from DOM before searching through it.
export function defuddleDOM(dom: dom.JSDOM) {
	const document = dom.window.document;

	const images = document.body.querySelectorAll("img");

	images.forEach((img) => {
		img.remove();
	});

	return dom;
};

export async function ensureDir(directory: string) {
	try {
		return await fs.promises.mkdir(directory, { recursive: true });
	} catch (err) {
		console.error(`Failed to create directory ${directory}:`, err);
		return;
	}
}

export async function clearDir(directory: string) {
	try {
		const files = await fs.promises.readdir(directory);
		for (const file of files) {
			const filePath = path.join(directory, file);
			if ((await fs.promises.lstat(filePath)).isFile()) {
				await fs.promises.unlink(filePath);
			}
		}
	} catch (err) {
		console.error("Error clearing avatar directory:", err);
	}
}


// String manipulation
// ================================

export const changeExtensions = (filenames: string[], extensions: string[], only?: "with" | "without") => {
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

		if(only && only === "with") result = [...withExtension];
		if(only && only === "without") result = [...result];
		else result = [...result, ...withExtension];
	});

	// Remove any duplicates
	return [...new Set(result)];
};

export function getExtension(filename: string): string {
	const base = path.basename(filename);
	const lastDot = base.lastIndexOf(".");
	if (lastDot === -1 || lastDot === 0) return "";
	return base.slice(lastDot + 1);
}


// Security
// ================================

export async function hashPassword(passwordInput: string, saltRounds = 10) {
	try {
		const hash = await bcrypt.hash(passwordInput, saltRounds);
		return hash;
	} catch (err) {
		console.error(err);
		return null;
	}
}

export async function matchHash(input: string, hash: string) {
	return await bcrypt.compare(input, hash);
}
