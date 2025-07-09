import type { UserData } from "@/types/user.d.ts";

import UserPermissions from "./permissions.ts";
import Image from "../image.ts";

export default class User {
	permissions: UserPermissions;

	id: number;
	username: string;
	email: string;
	avatar: Image | null;
	created_at: string;
	updated_at: string;

	constructor(user: UserData) {
        this.id = user.id;
        this.username = user.username;
        this.email = user.email;
		this.avatar = JSON.parse(user.avatar) ? new Image(JSON.parse(user.avatar)) : null;
        this.created_at = user.created_at;
        this.updated_at = user.updated_at;

		this.permissions = new UserPermissions();
	}
}
