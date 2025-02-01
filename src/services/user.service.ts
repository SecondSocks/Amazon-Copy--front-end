import Cookies from 'js-cookie'

import { IFullUser, IUser, IUserResponse } from '@/types/user.types'

import { URL } from '@/config/url.config'

import { instance } from '@/api/api.interceptor'

class UserService {
	async getProfile() {
		const accessToken = Cookies.get('accessToken')
		console.log(accessToken)

		return instance<IFullUser>({
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
