'use client'

import { useRouter } from 'next/navigation'

import { CatalogPagination } from '@/ui/catalog/CatalogPagination'

import { TypePaginationProducts } from '@/types/product.interface'

import Meta from '@/config/Meta'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

export function Home({ products, length }: Readonly<TypePaginationProducts>) {
	const { user } = useAuth()
	const { logout } = useActions()

	const router = useRouter()

	return (
		<Meta title='Home'>
			{!!user ? (
				<button onClick={() => logout()}>Logout</button>
			) : (
				<button onClick={() => router.replace('http://localhost:3000/auth')}>
					login
				</button>
			)}

			<CatalogPagination
				data={{ products, length }}
				title='Freshed products'
			/>
		</Meta>
	)
}
