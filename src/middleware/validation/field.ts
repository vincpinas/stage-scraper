import type { Request, Response, NextFunction } from "express";

import Validate from "./functions.ts";

// Validation logic
// ================================

export function fieldValidator(
	req: Request,
	res: Response,
	next: NextFunction
) {
	const fields = Object.entries(req.body || req.query);
	const response = req.httpResponse;
	const requiredFields = req.validationProps.field?.requiredFields;

	// Check if any required field is missing from the fields
	if (requiredFields) {
		const fieldKeys = fields.map(([key]) => key);
		const missingFields = requiredFields.filter(
			(field) => !fieldKeys.includes(field)
		);
		if (missingFields.length > 0) {
			missingFields.forEach((missingField) => {
				response.addError({
					field: missingField,
					message: `${missingField} field is required`,
				});
			});

			response.clean();

			res.status(400).send(response);
			res.end();
			return;
		}
	}

	const validatedFields = fields.map((field) => {
		const [key, value] = field;

		const validator = Validate[key as keyof typeof Validate] as any;

		if (typeof validator !== "function") return undefined;

		return validator(value, key);
	});

	const results = Validate.all(validatedFields.filter((v) => v !== undefined));

	if (results.length > 0) {
		response.combine(Validate.toResponse(results));

		response.clean();

		res.status(400).send(response);
		res.end();
		return;
	}

	next();
}
