import StageScraper from "@/App.ts";
import HttpResponse from "@/models/response.ts";
import { NextFunction, Request, Response } from "express";

const setup = (appRef: StageScraper) => {
	return (req: Request, res: Response, next: NextFunction) => {
		req.appRef = appRef;
		req.httpResponse = new HttpResponse();

        const originalSend = res.send;

        // Override the send method
        res.send = function (data: unknown) {
            // Your custom logic here - runs before every .send() call
            req.httpResponse.clean();
    
            // Call the original send method
            return originalSend.call(this, data);
        };

		next();
	};
};

const cleanup = async (req: Request, res: Response) => {
	const response = req.httpResponse;

	// Only send response if headers haven't been sent yet (i.e., no other middleware has called res.end())
	if (res.headersSent) {
		return;
	}

	res.status(200).send(response).end();
};

export { setup, cleanup, HttpResponse };

export default HttpResponse;
