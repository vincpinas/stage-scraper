export interface DBColumn {
	field: string;
	value: any;
	message?: string;
}

export type DBRow = DBColumn[];

export interface DBError {
	field: string;
	message: string;
} 