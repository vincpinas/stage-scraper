import express from "express";
import useValidation from "@middleware/validation";

const router = express.Router();

// Development routes
// ================================

if (process.env.NODE_ENV === "development") {
	router.get("/", async (req, res, next) => {
		const response = req.httpResponse;
		const db = req.appRef.getDB();

		const results = await db.users.findMany();

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
		},
	}),
	async (req, res, next) => {
		const response = req.httpResponse;
		const db = req.appRef.getDB();
		const { username, password, email } = req.body;

		try {
			const newUser = await db.users.create({
				data: {
					username,
					password,
					email,
				},
			});

			// Automatically log in the user after successful signup
			const login = await db.users.findUnique({
				where: {
					username,
				},
			});

			if (login && login.password === password) {
				req.session.loggedIn = true;
				req.session.username = username;
				response.setMessage("Account created and logged in successfully");
			} else {
				response.setMessage("Account created successfully. Please log in.");
			}

			response.addResults(newUser);
			response.setUser(login);

			next();
		} catch (err: any) {
			response.setMessage("Error creating user");
			response.addError(err.message);
			next();
		}
	}
);

router.post(
	"/login",
	...useValidation({
		field: {
			requiredFields: ["username", "password"],
		},
	}),
	async (req, res, next) => {
		const response = req.httpResponse;
		const db = req.appRef.getDB();
		const { username, password } = req.body;

		try {
			const login = await db.users.findUnique({
				where: {
					username,
				},
			});

			if (!login || login.password !== password) {
				response.setMessage("Invalid username or password");
				response.clean();
				res.status(401).send(response);
				res.end();
				return;
			}

			req.session.loggedIn = true;
			req.session.username = username;

			response.setMessage("Login successful");
			response.setUser(login);

			next();
		} catch (err: any) {
			response.setMessage("Error logging in");
			response.addError(err.message);
			response.clean();
			res.status(500).send(response);
			res.end();
		}
	}
);

export default router;
