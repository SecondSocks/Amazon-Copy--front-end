'use client'

import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

import { COLORS } from '@/constants/color.constant'

import { useProfile } from '@/hooks/useProfile'

import { useToggleFavorite } from './hooks/useToggleFavorite'

export function FavoriteButton({ productId }: Readonly<{ productId: string }>) {
	const { profile, profileLoading } = useProfile()

	const { toggleFavorite, isFavoritePending } = useToggleFavorite(productId)

	const isExist = profile?.favorites?.some(
		favorite => favorite.id === productId
	)

	return (
		<div>
			<button onClick={() => toggleFavorite()}>
				{isExist ? (
					<AiFillHeart color={COLORS.favorite} />
				) : (
					<AiOutlineHeart color={COLORS.secondary} />
				)}
			</button>
		</div>
	)
}
