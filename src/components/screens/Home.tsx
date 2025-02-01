'use client'

import { Catalog } from '@/ui/catalog/Catalog'

import { TypePaginationProducts } from '@/types/product.interface'

import Meta from '@/config/Meta'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/navigation'

export function Home({ products, length }: Readonly<TypePaginationProducts>) {
	const { user } = useAuth()
	const { logout } = useActions()
	
	const router = useRouter()

	return (
		<Meta title='Home'>
			{!!user ? <button onClick={() => logout()}>Logout</button> : <button onClick={() => router.replace('http://localhost:3000/auth')}>login</button>}

			<Catalog
				products={products}
				title='Freshed products'
			/>
		</Meta>
	)
}
