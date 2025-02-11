'use client'

import { Catalog } from '@/ui/catalog/Catalog'

import { NextPageAuth } from '@/providers/auth-provider/auth-page.types'

import Meta from '@/config/Meta'

import { useProfile } from '@/hooks/useProfile'

const FavoritesPage: NextPageAuth = () => {
	const { profile } = useProfile()

	return (
		<Meta title='favorites'>
			<Catalog
				products={profile?.favorites || []}
				title='Favorites'
			/>
		</Meta>
	)
}

FavoritesPage.isOnlyUser = true

export default FavoritesPage
