import type { Request, Response, NextFunction } from "express";

// Validation logic
// ================================

export function attachmentValidator(
	req: Request,
	res: Response,
	next: NextFunction
) {
	const response = req.httpResponse;
	const attachmentOptions = req.validationProps.attachment;
	const file = req.file;

	// Validate attachments
	if (!attachmentOptions || !file) {
		return next();
	}

	const bufferSize = file.buffer.length;
	const sizeInKB = bufferSize / 1024;
	const sizeInMB = sizeInKB / 1024;
	const maxSizeInMB: number = attachmentOptions.maxSize / 1024 / 1024;
	const sizeDisplay =
		sizeInMB >= 1 ? `${sizeInMB.toFixed(2)}MB` : `${sizeInKB.toFixed(2)}KB`;

	if (bufferSize > attachmentOptions.maxSize) {
		response.setMessage(
			`Attachment is ${sizeDisplay} while the largest allowed size is: ${maxSizeInMB}MB`
		);

		res.status(400).send(response).end();
		return;
	}

	next();
}
