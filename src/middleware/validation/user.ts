import type { ValidationOptions } from "@types";
import type { Request, Response, NextFunction } from "express";

// Validation setup
// ================================

export async function userValidation(options: ValidationOptions) {
	return [
		(req: Request, res: Response, next: NextFunction) => {
			req.requiresLogin = options.requiresLogin || false;
            
			next();
		},
		userValidator,
	];
};

// Validation logic
// ================================

export async function userValidator(req: Request, res: Response, next: NextFunction) {    
	const response = req.httpResponse;
    const username = req.session.username;
    const db = req.appRef.getDB();
    
    if(req.requiresLogin && !req.session.loggedIn) {
        response.addServerError({
            req: req,
            file: import.meta.url,
            message: "User not logged in"
        })
        
        response.setMessage("Authorization error");
        
        response.clean();
        
        res.status(500).send(response).end();
        return;
    }

    if(!username) return next();

    const user = await db.users.getByName(username);
    
    if(req.session.loggedIn && username) {
        response.setUser(user);
    }

	next();
};