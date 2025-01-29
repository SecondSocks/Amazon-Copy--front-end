'use client'

import { useQuery } from '@tanstack/react-query'

import { reviewService } from '@/services/review.service'

export function useRating(productId: string) {
	const { data, isLoading } = useQuery({
		queryKey: ['get product rating', productId],
		queryFn: () => reviewService.getAverageByProduct(productId),
		select: ({ data }) => data
	})

	return { rating: data, isLoading }
}
