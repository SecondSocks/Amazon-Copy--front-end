import { ICartItem } from '@/types/cart.interface'

export interface ICartInitialState {
	items: ICartItem[]
}

export type TypeAddToCartPayload = Omit<ICartItem, 'id'>

export type TypeChangeQuantityPayload = {
	type: 'minus' | 'plus'
} & Pick<ICartItem, 'id'>

export type TypeSize = 'SHORT' | 'TALL' | 'GRADLE' | 'VENTI'

export type TypeChangeSizePayload = {
	size: TypeSize
} & Pick<ICartItem, 'id'>
