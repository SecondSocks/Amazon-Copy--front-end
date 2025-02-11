'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import { Catalog } from '@/ui/catalog/Catalog'

import { ICategory } from '@/types/category.interface'
import { IProduct } from '@/types/product.interface'

import Meta from '@/config/Meta'

import { errorCatch } from '@/api/api.helper'

import { categoryService } from '@/services/category.service'
import { productService } from '@/services/products/product.service'

interface ICategoryPage {
	products: IProduct[]
	category: ICategory
}

export default function CategoryPage() {
	const pathname = usePathname()
	const slug = pathname.split('/').pop()

	const [data, setData] = useState<ICategoryPage | null>(null)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		if (slug) {
			const fetchData = async () => {
				try {
					const result = await getStaticProps(slug as string)
					setData(result)
				} catch (error) {
					errorCatch(error)
				}
			}
			fetchData()
		}
	}, [slug])

	if (error) return <div>{error}</div>
	if (!data) return <div>Loading...</div>

	return (
		<Meta title={data.category.name}>
			<Catalog
				products={data.products || []}
				title={data.category.name}
			/>
		</Meta>
	)
}

async function getStaticProps(slug: string) {
	const { data: products } = await productService.getByCategory(slug)
	const { data: category } = await categoryService.getBySlug(slug)

	return { products, category }
}
