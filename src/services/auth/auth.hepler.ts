import {IAuthResponse, ITokens} from '@/store/user/user.interface'
import Cookies from 'js-cookie'

export const saveTokenStorage = (data: ITokens) => {
	Cookies.set('accessToken', data.accessToken)
	Cookies.set('refreshToken', data.refreshToken)
}

export const getAccessToken = async () => {
	const accessToken = Cookies.get('accessToken')
	return accessToken || null
}

export const getUserFromStorage = async () => {
	return JSON.parse(localStorage.getItem('user') || '{}')
}

export const removeFromStorage = () => {
	Cookies.remove('accessToken')
	Cookies.remove('refreshToken')
	localStorage.removeItem('user')
}

export const saveToStorage = (data: IAuthResponse) => {
	saveTokenStorage(data)
	localStorage.saveItem('user', JSON.stringify(data.user))
}