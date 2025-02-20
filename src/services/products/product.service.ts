import {
	IProduct,
	IProductResponse,
	TypePaginationProducts,
	TypeProductDataFilters
} from '@/types/product.interface'

import { URL } from '@/config/url.config'

import { instance } from '@/api/api.interceptor'

class ProductService {
	async getAll(queryData = {} as TypeProductDataFilters) {
		const { data } = await instance<TypePaginationProducts>({
			url: URL.PRODUCTS['ROOT'],
			method: 'GET',
			params: queryData
		})

		return data
	}

	async getSimilar(id: string) {
		return instance<IProduct[]>({
			url: `${URL.PRODUCTS['similar']}/${id}`,
			method: 'GET'
		})
	}

	async getBySlug(slug: string) {
		return instance<IProduct>({
			url: `${URL.PRODUCTS['by-slug']}/${slug}`,
			method: 'GET'
		})
	}

	async getByCategory(categoryId: string) {
		return instance<IProduct[]>({
			url: `${URL.PRODUCTS['by-category']}/${categoryId}`,
			method: 'GET'
		})
	}

	async getById(id: string) {
		return instance<IProduct>({
			url: `${URL.PRODUCTS['ROOT']}/${id}`,
			method: 'GET'
		})
	}

	async create() {
		return instance<IProduct>({
			url: URL.PRODUCTS['ROOT'],
			method: 'POST'
		})
	}

	async update(id: string, data: IProductResponse) {
		return instance<IProduct>({
			url: `${URL.PRODUCTS['ROOT']}/${id}`,
			method: 'PUT',
			data
		})
	}

	async delete(id: string) {
		return instance<IProduct>({
			url: `${URL.PRODUCTS['ROOT']}/${id}`,
			method: 'DELETE'
		})
	}
}

export const productService = new ProductService()
