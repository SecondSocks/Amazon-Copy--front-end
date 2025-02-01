import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
	FLUSH,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	REHYDRATE,
	persistReducer,
	persistStore
} from 'redux-persist'
import createWebStorage from 'redux-persist/lib/storage/createWebStorage'

import { cartSlice } from './cart/cart.slice'
import { userSlice } from './user/user.slice'

const createNoopStorage = () => {
	return {
		getItem(_key) {
			return Promise.resolve(null)
		},
		setItem(_key, value) {
			return Promise.resolve(value)
		},
		removeItem(_key) {
			return Promise.resolve()
		}
	}
}

const storage =
	typeof window !== 'undefined'
		? createWebStorage('local')
		: createNoopStorage()

const persistConfig = {
	key: 'amazon-v2',
	storage,
	whitelist: ['cart', userSlice.name],
	timeout: 1000
}

const rootReducer = combineReducers({
	cart: cartSlice.reducer,
	// carousel: carouselSlice.reducer
	user: userSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
			}
		})
})

export const persistor = persistStore(store)

export type TypeRootState = ReturnType<typeof rootReducer>
