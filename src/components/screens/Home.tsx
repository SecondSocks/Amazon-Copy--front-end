'use client'

import { CatalogPagination } from '@/ui/catalog/CatalogPagination'

import { TypePaginationProducts } from '@/types/product.interface'

import Meta from '@/config/Meta'

export function Home({ products, length }: Readonly<TypePaginationProducts>) {
	return (
		<Meta title='Home'>
			<CatalogPagination
				data={{ products, length }}
				title='Freshed products'
			/>
		</Meta>
	)
}
