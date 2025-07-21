import express from "express";
import useValidation from "@middleware/validation";
import { hashPassword, matchHash } from "@lib/util.ts";

const router = express.Router();

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
			const hashedPassword = await hashPassword(password);

			if(!hashedPassword) {
				throw new Error("Failed to hash password")
			}

			const newUser = await db.users.create({
				data: {
					username,
					password: hashedPassword,
					email,
				},
			});

			req.session.loggedIn = true;
			req.session.username = username;

			response.setMessage("Account created and logged in successfully");
			response.setUser(newUser);

			next();
		} catch (err: unknown) {
			const error = err as Error;
			response.setMessage("Error creating user");
			response.addError({
				message: error.message,
			});

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

			if (!login || !await matchHash(password, login.password)) {
				response.setMessage("Invalid username or password");
				res.status(401).send(response).end();
				return;
			}

			req.session.loggedIn = true;
			req.session.username = username;

			response.setMessage("Login successful");
			response.setUser(login);

			next();
		} catch (err: unknown) {
			const error = err as Error;
			response.setMessage("Error logging in");
			response.addError({
				message: error.message,
			});
			res.status(500).send(response).end();
		}
	}
);

export default router;
