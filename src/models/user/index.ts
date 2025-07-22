import type { UserData } from "@types";

import UserPermissions from "./permissions.ts";
import File from "../file.ts";
import { PrismaClient } from "@db/prisma/index.js";

export default class User {
	permissions: UserPermissions;

	id: number;
	username: string;
	email: string;
	avatarId: number | null;
	created_at: Date | null;
	updated_at: Date | null;

	constructor(user: UserData) {
		this.id = user.id;
		this.username = user.username;
		this.email = user.email;
		this.avatarId = user.avatarId;
		this.created_at = user.created_at;
		this.updated_at = user.updated_at;

		this.permissions = new UserPermissions();
	}

	async getAvatar(db: PrismaClient) {
		if (!this.avatarId) return;

		const avatarData = await db.uploads.findFirst({
			where: { id: this.avatarId },
		});

		if (!avatarData) return;

		const avatar = new File({ ...avatarData, userId: this.id });

		return avatar.getUrl();
	}

	async json() {
		return {
			id: this.id,
			username: this.username,
			email: this.email,
			avatarUrl: await this.getAvatar(new PrismaClient()),
		}
	}
}
