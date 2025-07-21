export interface DBColumn {
	field: string;
	value: unknown;
	message?: string;
}

export type DBRow = DBColumn[];

export interface DBError {
	field: string;
	message: string;
} 