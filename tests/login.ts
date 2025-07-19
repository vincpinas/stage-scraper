import request from "supertest";
import StageScraper from "../src/App.ts";
import type { Response } from "supertest";

export default async function test(app: StageScraper) {
	return request(app.getApp())
		.post("/auth/login")
		.set("Content-Type", "application/json")
		.send({
			username: "testuser",
			password: "Password1",
		})
		.then((response: Response) => {
			// console.log(response.body);
			return response;
		})
		.catch((error) => {
			console.error("Error making request:", error);
			throw error;
		});
}