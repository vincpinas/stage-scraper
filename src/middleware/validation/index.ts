import type { Request, Response, NextFunction } from "express";
import type { ValidationOptions } from "@types";

import { fieldValidator } from "./field.ts";
import { attachmentValidator } from "./attachments.ts";
import { userValidator } from "./user.ts";

export function getValidators(options: ValidationOptions) {
	const validationProps: any = {}
	const validators = [];

	if(options.user) validators.push(userValidator);
	if(options.field) validators.push(fieldValidator);
	if(options.attachment) validators.push(attachmentValidator);

	return {
		props: validationProps,
		validators
	}
}

// Main validation middleware
// ================================

export default function useValidation(options: ValidationOptions) {
	const validation = getValidators(options);

	return [
		(req: Request, res: Response, next: NextFunction) => {
			// Non specific validation variables are set here, for more specific validation options go to the relevant validation file.
			req.requiresLogin = options.requiresLogin || false;
			req.validationProps = validation.props;

			next();
		},
		...validation.validators,
	];
}
