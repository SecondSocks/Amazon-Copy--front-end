import { errorCatch } from '@/api/api.helper'

import { Home } from '@/screens/Home'
import { productService } from '@/services/products/product.service'

export const revalidate = 3600

async function generateStaticParams() {
	try {
		const { data } = await productService.getAll({ page: 1, perPage: 10 })
		return data ? { data } : null
	} catch (error) {
		errorCatch(error)
		return null
	}
}

export default async function HomePage() {
	const props = await generateStaticParams()
	const data = props?.data

	return (
		<Home
			products={data?.products || []}
			length={data?.length ?? 0}
		/>
	)
}
