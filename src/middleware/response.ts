import StageScraper from "@/App.ts";
import HttpResponse from "@/models/response.ts";
import { NextFunction, Request, Response } from "express";

const setup = (appRef: StageScraper) => {
    return (req: Request, res: Response, next: NextFunction) => {
        req.appRef = appRef;
        req.httpResponse = new HttpResponse();
        
        next();
    };
}

const cleanup = async (req: Request, res: Response) => {
    const response = req.httpResponse; 

    // Only send response if headers haven't been sent yet (i.e., no other middleware has called res.end())
    if (res.headersSent) {
        return;
    }

    response.clean();

    res.status(200).send(response);
    res.end();
}

export {
    setup,
    cleanup,
    HttpResponse
}

export default HttpResponse;