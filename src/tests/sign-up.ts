import request from "supertest";
import StageScraper from "../App.ts";

export default async function test(app: StageScraper) {
	return request(app.getApp())
		.post("/auth/sign-up")
		.set("Content-Type", "application/json")
		.send({
			username: "testuser" + Date.now(),
			password: "Password1",
			email: "test" + Date.now() + "@gmail.com",
		})
		.then((response: any) => {
			console.log(response.body);
			return response;
		})
		.catch((error) => {
			console.error("Error making request:", error);
			throw error;
		});
}