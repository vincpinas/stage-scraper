import StageScraper from "../src/App.ts";

import signup from "./sign-up.ts";
import uploadAvatar from "./upload-avatar.ts";

export default async function test(app: StageScraper) {
	try {
		// First, signup and get the response in signupResponse.
		console.log("Performing signup...");
		const signupResponse = await signup(app);

		// You can also use login instead if you already have an account.
		// const loginResponse = await login(app);

		// Extract session cookies from the signup (or login) response
		const sessionCookies = Array.isArray(signupResponse.headers["set-cookie"])
			? signupResponse.headers["set-cookie"]
			: [signupResponse.headers["set-cookie"]];

		if (!sessionCookies) {
			console.error("No session cookies received from signup");
			return;
		}

		// Now perform upload with session cookies
		console.log("Performing upload with session...");
		await uploadAvatar(app, sessionCookies);

		// Wait a little for the Queue to run
		await new Promise((resolve) => setTimeout(resolve, 10000));
	} catch (error) {
		console.error("Error in auth-upload flow:", error);
	}
}
