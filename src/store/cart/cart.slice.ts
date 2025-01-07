import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import {
	ICartInitialState,
	TypeAddToCartPayload,
	TypeChangeQuantityPayload
} from './cart.types'

const initialState: ICartInitialState = {
	items: []
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<TypeAddToCartPayload>) => {
			const isExistSize = state.items.some(
				item =>
					item.product.id === action.payload.product.id &&
					item.size === action.payload.size
			)

			if (!isExistSize)
				state.items.push({
					...action.payload,
					id: state.items.length.toString()
				})
		},
		removeFromCart: (state, action: PayloadAction<{ id: string }>) => {
			state.items = state.items.filter(item => item.id !== action.payload.id)
		},
		changeQuantity: (
			state,
			action: PayloadAction<TypeChangeQuantityPayload>
		) => {
			const { id, type } = action.payload
			const item = state.items.find(item => item.id === id)

			if (item)
				// eslint-disable-next-line @typescript-eslint/no-unused-expressions
				type === 'plus' ? item.quantity++ : item.quantity--
		},
		reset: state => {
			state.items = []
		}
	}
})
