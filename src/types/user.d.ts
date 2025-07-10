export interface UserData {
	id: number;
	username: string;
	password: string;
	email: string;
	avatar: string | null;
	created_at: Date | null;
	updated_at: Date | null;
}
