'use client'

import { Catalog } from '@/ui/catalog/Catalog'

import { TypePaginationProducts } from '@/types/product.interface'

import Meta from '@/config/Meta'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

export function Home({ products, length }: Readonly<TypePaginationProducts>) {
	const { user } = useAuth()
	const { logout } = useActions()

	return (
		<Meta title='Home'>
			{!!user && <button onClick={() => logout()}>Logout</button>}

			<Catalog
				products={products}
				title='Freshed products'
			/>
		</Meta>
	)
}
