import { IReview, IReviewResponse } from '@/types/review.interface'

import { URL } from '@/config/url.config'

import { instance } from '@/api/api.interceptor'

class ReviewService {
	async getAll() {
		return instance<IReview[]>({
			url: URL.REVIEW['ROOT'],
			method: 'GET'
		})
	}

	async leave(productId: string, data: IReviewResponse) {
		return instance<IReview>({
			url: `URL.REVIEW['create']/${productId}`,
			method: 'POST',
			data
		})
	}

	async getAverageByProduct(productId: string) {
		return instance<number>({
			url: `${URL.REVIEW['average']}/${productId}`,
			method: 'GET'
		})
	}
}

export const reviewService = new ReviewService()
