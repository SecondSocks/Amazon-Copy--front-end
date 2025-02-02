import { ICategory } from '@/types/category.interface'
import { IReview } from '@/types/review.interface'

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

export interface IProductResponse {
	name: string
	price: number
	description?: string
	images: string[]
	categoryId: string
}

export type TypeProductDataFilters = {
	sort?: EnumProductSort
	searchTerm?: string
	page?: string | number
	perPage?: string | number
}

export enum EnumProductSort {
	HIGH_PRICE = 'high_price',
	LOW_PRICE = 'low_price',
	NEWEST = 'newest',
	OLDEST = 'oldest'
}

export type TypeProducts = {
	products: IProduct[]
}

export type TypePaginationProducts = {
	length: number
	products: IProduct[]
}
