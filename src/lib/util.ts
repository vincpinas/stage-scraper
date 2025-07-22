import dom from "jsdom";
import bcrypt from "bcrypt";
import fs from "fs";
import path from "path";

// General
// ================================

export function inArray(array: unknown[], item: unknown) {
	return array.indexOf(item) > -1;
}

export function hasProperty(
	object: unknown,
	property: string,
	expect?: { type?: string, value?: unknown }
) {
	if (typeof object !== "object" || object === null) {
		return false;
	}

	if (!(property in object)) {
		return false;
	}

	const value = (object as Record<string, unknown>)[property];

	if (expect?.type && typeof value !== expect.type) {
		return false;
	}

	if (arguments.length >= 3 && expect?.value) {
		// Only check expectValue if it was explicitly provided
		return value === expect.value;
	}

	return true;
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

export function getFileParts(filename: string): {
	extension: string;
	filename: string;
	nameWithoutExtension: string;
} {
	const base = path.basename(filename);
	const lastDot = base.lastIndexOf(".");
	if (lastDot === -1 || lastDot === 0) {
		return {
			extension: "",
			filename: base,
			nameWithoutExtension: base
		};
	}
	return {
		extension: base.slice(lastDot + 1),
		filename: base,
		nameWithoutExtension: base.slice(0, lastDot)
	};
}

export const changeExtensions = (filenames: string[], extensions: string[], only?: "with" | "without") => {
	let result: string[] = [];

	extensions.forEach((extension) => {
		// Normalize extension by removing leading dot if present
		const normalizedExtension = extension.replace(/^\./, "");

		const withExtension = filenames.flatMap((testPath: string) => {
			const { extension: fileExt, nameWithoutExtension } = getFileParts(testPath);
			const hasExtension = fileExt === normalizedExtension;

			if (hasExtension) {
				// If filename already has this extension, return both with and without extension
				return [nameWithoutExtension, testPath];
			}

			// If filename doesn't have this extension, return both original and with extension
			return [testPath, `${testPath}.${normalizedExtension}`];
		});

		if (only && only === "with") result = [...withExtension];
		if (only && only === "without") result = [...result];
		else result = [...result, ...withExtension];
	});

	// Remove any duplicates
	return [...new Set(result)];
};


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
