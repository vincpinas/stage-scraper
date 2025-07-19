import request from "supertest";
import StageScraper from "../src/App.ts";

export default async function test(app: StageScraper) {
	return request(app.getApp())
		.post("/auth/sign-up")
		.set("Content-Type", "application/json")
		.send({
			username: "testuser",
			password: "Password1",
			email: "test" + "@gmail.com",
		})
		.then((response: { body: unknown }) => {
			// console.log(response.body);
			return response;
		})
		.catch((error) => {
			console.error("Error making request:", error);
			throw error;
		});
}