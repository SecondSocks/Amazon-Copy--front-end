import {ICategory} from '@/types/category.interface'
import {IReview} from '@/types/review.interface'

export interface IProduct {
	id: string
	name: string
	images: string[]
	description: string
	price: number
	createdAt: Date
	slug: string
	reviews: IReview[]
	category: ICategory
}

export interface IProductDetails {
	product: IProduct
}