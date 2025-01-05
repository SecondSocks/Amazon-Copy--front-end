import { IOrder } from '@/types/order.interface'

import { URL } from '@/config/url.config'

import { instance } from '@/api/api.interceptor'

class OrderService {
	async getOrders() {
		return instance<IOrder>({
			url: URL.ORDERS,
			method: 'GET'
		})
	}
}

export const orderService = new OrderService()
