import { instance } from "@/api/api.interceptor"
import {IReview, IReviewResponse} from '@/types/review.interface'
import { URL } from '@/config/url.config'

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
}

export const reviewService = new ReviewService()