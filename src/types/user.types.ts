export interface IUser {
	id: string
	email: string
	name: string
	avatarPath: string
	phone: string
}

export interface IUserResponse {
	email: string
	password?: string
	name?: string
	avatarPath?: string
	phone?: string
}