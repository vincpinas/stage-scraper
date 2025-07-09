import express from "express";
import useValidation from "@middleware/validation";

// Configuration
// ================================

const router = express.Router();

// Development routes
// ================================

if (process.env.NODE_ENV === "development") {
	router.get("/", async (req, res, next) => {
		const response = req.httpResponse;
		const db = req.appRef.getDB();

		const results = await db.users.all();

		response.addResults(results);

		next();
	});
}

// Authentication routes
// ================================

router.post(
	"/sign-up",
	...useValidation({
		field: {
			requiredFields: ["username", "password", "email"],
		}
	}),
	async (req, res, next) => {
		const response = req.httpResponse;
		const db = req.appRef.getDB();
		const { username, password, email } = req.body;

		const newUser = await db.users.create(username, password, email);

		// Check if user creation was successful
		if (newUser.errors.length > 0) {
			response.combine(newUser);
			next();
			return;
		}

		// Automatically log in the user after successful signup
		const login = await db.users.login(username, password);

		if (login) {
			req.session.loggedIn = true;
			req.session.username = username;
			response.setMessage("Account created and logged in successfully");
		} else {
			response.setMessage("Account created successfully. Please log in.");
		}

		response.combine(newUser);
		response.setUser(login);

		next();
	}
);

router.post(
	"/login",
	...useValidation({
		field: {
			requiredFields: ["username", "password"],
		}
	}),
	async (req, res, next) => {
		const response = req.httpResponse;
		const db = req.appRef.getDB();
		const { username, password } = req.body;

		const login = await db.users.login(username, password);

		if (!login) {
			response.setMessage("Invalid username or password");

			response.clean();
			
			res.status(401).send(response);
			res.end();
			return;
		}

		req.session.loggedIn = true;
		req.session.username = username;

		response.setMessage("Login successful");
		response.setUser(login)

		next();
	}
);

export default router;
