export interface UserData {
	id: number;
	username: string;
	password: string;
	email: string;
	avatarId: number | null;
	created_at: Date | null;
	updated_at: Date | null;
}
