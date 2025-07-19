import StageScraper from "../src/App.ts";

import signup from "./sign-up.ts";
import login from "./login.ts";
import uploadAvatar from "./upload-avatar.ts";

export default async function test(app: StageScraper) {
	try {
		// First, signup
		console.log("Performing signup...");
		const signupResponse = await signup(app);

		// Perform login and capture session cookies
		console.log("Performing login...");
		const loginResponse = await login(app);

		// Extract session cookies from login response
		const sessionCookies = Array.isArray(loginResponse.headers["set-cookie"])
  ? loginResponse.headers["set-cookie"]
  : [loginResponse.headers["set-cookie"]];

		if (!sessionCookies) {
			console.error("No session cookies received from login");
			return;
		}

		// console.log("Session cookies:", sessionCookies);

		// Wait a moment for session to be established
		await new Promise((resolve) => setTimeout(resolve, 1000));
		
		// Now perform upload with session cookies
		console.log("Performing upload with session...");
		await uploadAvatar(app, sessionCookies);

		// Wait a little for the Queue to run
		await new Promise((resolve) => setTimeout(resolve, 10000));
	} catch (error) {
		console.error("Error in auth-upload flow:", error);
	}
}
