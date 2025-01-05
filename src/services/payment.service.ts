import { IPaymentResponse } from '@/types/payment.interface'

import { URL } from '@/config/url.config'

import { instance } from '@/api/api.interceptor'

class PaymentService {
	async createPayment(amount: number) {
		return instance.post<IPaymentResponse>(URL.PAYMENT, {
			amount
		})
	}
}

export const paymentService = new PaymentService()
