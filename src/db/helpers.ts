import { hasProperty } from "@lib/util.ts";

export async function waitForDbRecord<T>(
	dbTable: { findFirst: (args: { where: any }) => Promise<T | null> },
	searchParams: { where: any },
	maxAttempts: number,
	delayMs: number
): Promise<any> {
	let attempts = 0;
	let record: T | null = null;

	while (attempts < maxAttempts) {
		record = await dbTable.findFirst(searchParams);
		if (record) return record;
		await new Promise((resolve) => setTimeout(resolve, delayMs));
		attempts++;
	}
	return null;
}

export async function safeUpsert<T>(
	dbTable: {
		update: (args: { where: any; data: any }) => Promise<T | null>;
		upsert: (args: {
			where: any;
			update: any;
			create: any;
		}) => Promise<T | null>;
	},
	where: unknown,
	insert: Record<string, unknown>,
	onComplete?: (result: any) => Promise<void>
) {
	try {
		const result = await dbTable.upsert({
			where,
			update: insert,
			create: insert,
		});

		if (onComplete && typeof onComplete === "function") {
			await onComplete(result);
		}
	} catch (err: unknown) {
		// If unique constraint error, try update
		if (hasProperty(err, "code", { type: "string", value: "P202" })) {
			try {
				const result = await dbTable.update({
					where,
					data: insert,
				});

				if (onComplete && typeof onComplete === "function") {
					await onComplete(result);
				}
			} catch (updateErr) {}
		} else {
		}
	}
}
