import {IUser} from '@/types/user.types'

export interface IReview {
	user: IUser
	id: string
	rating: string
	text: string
	createdAt: Date
}

export interface IReviewResponse {
	rating: number
	text: string
}