import { createAsyncThunk } from '@reduxjs/toolkit'

import { errorCatch } from '@/api/api.helper'

import { IAuthResponse, IEmailPassword } from './user.interface'
import { removeFromStorage } from '@/services/auth/auth.helper'
import { authService } from '@/services/auth/auth.service'

export const register = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'/auth/register',
	async (data, thunkApi) => {
		try {
			const response = await authService.auth('register', data)

			return response
		} catch (error) {
			return thunkApi.rejectWithValue(error)
		}
	}
)

export const login = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'/auth/login',
	async (data, thunkApi) => {
		try {
			const response = await authService.auth('login', data)

			return response
		} catch (error) {
			return thunkApi.rejectWithValue(error)
		}
	}
)

export const logout = createAsyncThunk('/auth/logout', async () => {
	removeFromStorage()
})

export const checkAuth = createAsyncThunk<IAuthResponse>(
	'/auth/check-auth',
	async (_, thunkApi) => {
		try {
			const response = await authService.getNewTokens()

			return response.data
		} catch (error) {
			if (errorCatch(error) === 'jwt expired') thunkApi.dispatch(logout())

			return thunkApi.rejectWithValue(error)
		}
	}
)
