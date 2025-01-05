import {instance} from '@/api/api.interceptor'
import {ICategory} from '@/types/category.interface'
import { URL } from '@/config/url.config'

class CategoryService {
	async getAll() {
		return instance<ICategory[]>({
			url: URL.CATEGORY['ROOT'],
			method: 'GET'
		})
	}
	
	async getById(id: string) {
		return instance<ICategory>({
			url: `${URL.CATEGORY['ROOT']}/${id}`,
			method: 'GET'
		})
	}
	
	async getBySlug(slug: string) {
		return instance<ICategory>({
			url: `${URL.CATEGORY['by-slug']}/${slug}`,
			method: 'GET'
		})
	}
	
	async create() {
		return instance<ICategory>({
			url: URL.CATEGORY['ROOT'],
			method: 'POST',
		})
	}
	
	async update(id: string, categoryName: string) {
		return instance<ICategory>({
			url: `${URL.CATEGORY['ROOT']}/${id}`,
			method: 'PUT',
			data: categoryName
		})
	}
	
	async delete(id: string) {
		return instance<ICategory>({
			url: `${URL.CATEGORY['ROOT']}/${id}`,
			method: 'DELETE'
		})
	}
}

export const categoryService = new CategoryService()