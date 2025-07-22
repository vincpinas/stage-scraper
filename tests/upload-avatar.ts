import request from "supertest";
import StageScraper from "../src/App.ts";

const fetchImageBuffer = async (url: string) => {
	const response = await fetch(url);
	const blob = await response.blob();
	const arrayBuffer = await blob.arrayBuffer();

	return Buffer.from(arrayBuffer);
};

export default async function test(
	app: StageScraper,
	sessionCookies?: string[]
) {
	const requestBuilder = request(app.getApp())
		.post("/upload/avatar")
		.set("Content-Type", "multipart/form-data")
		.attach(
			"avatar",
			await fetchImageBuffer(
				"https://i.pinimg.com/736x/5f/9c/1d/5f9c1d9d15167e0a59e6dad41e8556f9.jpg"
			),
			"avatar.jpg"
		);

	// Add session cookies if provided
	if (sessionCookies && sessionCookies.length > 0) {
		requestBuilder.set("Cookie", sessionCookies);
	}

	return requestBuilder
		.then((response) => {
			// console.log(response.body);
		})
		.catch((error) => {
			console.error("Error making request:", error);
		});
}
