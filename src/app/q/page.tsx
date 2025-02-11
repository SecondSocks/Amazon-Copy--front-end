'use client'

import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'

import { Catalog } from '@/ui/catalog/Catalog'

import Meta from '@/config/Meta'

import { productService } from '@/services/products/product.service'

export default function SearchPage() {
	const searchParams = useSearchParams()
	const query = searchParams?.get('term')

	const { data, isLoading } = useQuery({
		queryKey: ['search products', query],
		queryFn: () =>
			productService.getAll({
				searchTerm: query as string
			})
	})

	return (
		<Meta title='Search'>
			<Catalog
				products={data?.products || []}
				title={`Search for "${query ?? ''}"`}
			/>
		</Meta>
	)
}
