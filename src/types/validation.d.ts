export enum Validators {
	"user",
	"field",
	"attachment"
}

export interface ValidationOptions {
	requiresLogin?: boolean;
	
	user?: UserValidationOptions;
	attachment?: AttachmentValidationOptions;
	field?: FieldValidationOptions;
}

export interface UserValidationOptions {
	requiresLogin?: boolean;
}

export interface FieldValidationOptions {
	requiredFields?: string[];
	ignoreFields?: string[];
}

export interface AttachmentValidationOptions {
	maxSize: number;
}

export interface ValidationResult {
	valid: boolean;
	message: string;
	field: string;
} 