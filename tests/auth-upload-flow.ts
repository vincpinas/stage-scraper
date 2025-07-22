import StageScraper from "../src/App.ts";
import signup from "./sign-up.ts";
import login from "./login.ts";
import uploadAvatar from "./upload-avatar.ts";

/**
 * Runs the authentication and avatar upload flow:
 * 1. Signs up a new user (or you can swap for login).
 * 2. Extracts session cookies from the response.
 * 3. Uploads an avatar using the authenticated session.
 * 4. Waits for the queue to process the upload.
 */
export default async function test(app: StageScraper) {
	await new Promise((resolve) => setTimeout(resolve, 1000));

	try {
		console.log("Starting authentication and upload flow...");

		// Step 1: Sign up
		await signup(app);

		// Step 2: Login and get the response.
		const loginResponse = await login(app);

		// Step 2: Extract session cookies from the response headers
		const setCookieHeader = loginResponse.headers["set-cookie"];
		let sessionCookies: string[] | undefined;

		if (Array.isArray(setCookieHeader)) {
			sessionCookies = setCookieHeader;
		} else if (typeof setCookieHeader === "string") {
			sessionCookies = [setCookieHeader];
		}

		if (!sessionCookies || sessionCookies.length === 0) {
			console.error("No session cookies received from signup. Aborting upload.");
			return;
		}

		// Step 3: Upload avatar with session cookies
		console.log("Uploading avatar with authenticated session...");
		await uploadAvatar(app, sessionCookies);

		// Step 4: Wait for the queue to process the upload
		console.log("Waiting for the queue to process the upload...");
		await new Promise((resolve) => setTimeout(resolve, 6000));

		console.log("Auth-upload flow completed.");
	} catch (error) {
		console.error("Error in auth-upload flow:", error);
	}
}
