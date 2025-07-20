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