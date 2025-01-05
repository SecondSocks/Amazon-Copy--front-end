import { ICartItem } from '@/types/cart.interface'
import { IUser } from '@/types/user.types'

export enum EnumOrderStatus {
	PENDING = 'PENDING',
	PAYED = 'PAYED',
	SHIPPED = 'SHIPPED',
	DELIVERED = 'DELIVERED'
}

export interface IOrder {
	id: string
	createdAt: string
	items: ICartItem[]
	status: EnumOrderStatus
	user: IUser
}
