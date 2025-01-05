import {instance} from '@/api/api.interceptor'
import { URL } from '@/config/url.config'
import {IUser, IUserResponse} from '@/types/user.types'

class UserService {
	async getProfile() {
		return instance<IUser[]>({
			url: URL.USER['profile'],
			method: 'GET'
		})
	}
	
	async updateProfile(data: IUserResponse) {
		return instance<IUser>({
			url: URL.USER['profile'],
			method: 'PUT',
			data
		})
	}
	
	async toggleFavorite(productId: string) {
		return instance<IUser>({
			url: `${URL.USER['toggle-favorite']}/${productId}`,
			method: 'PATCH'
		})
	}
}

export const userService = new UserService()