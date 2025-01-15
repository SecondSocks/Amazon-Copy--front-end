import { IProduct } from './product.interface'

export interface IUser {
	id: string
	email: string
	name: string
	avatarPath: string
	phone: string
}

export interface IFullUser extends IUser {
	favorites: IProduct[]
}

export interface IUserResponse {
	email: string
	password?: string
	name?: string
	avatarPath?: string
	phone?: string
}
