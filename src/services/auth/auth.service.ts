import {getContentType} from '@/api/api.helper'
import {instance} from '@/api/api.interceptor'
import {saveToStorage} from '@/services/auth/auth.hepler'
import {IAuthResponse, IEmailPassword} from '@/store/user/user.interface'
import axios from 'axios'
import Cookies from 'js-cookie'

class AuthService {
	async auth(type: 'login' | 'register', data: IEmailPassword) {
		const response = await instance<IAuthResponse>({
			url: `/auth/${type}`,
			method: 'POST',
			data
		})
		
		if (response.data.accessToken) saveToStorage(response.data)
		
		return response.data
	}
	
	async getNewTokens() {
		const refreshToken = Cookies.get('refresh-token')
		
		const response = await axios.post<string, { data: IAuthResponse }>(
			process.env.SERVER_URL + '/auth/login/access-token',
			{ refreshToken },
			{
				headers: getContentType()
			}
		)
		
		if (response.data.accessToken) saveToStorage(response.data)
		
		return response
	}
}

export const authService = new AuthService()