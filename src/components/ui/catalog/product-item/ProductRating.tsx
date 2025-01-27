'use client'

import { useQuery } from '@tanstack/react-query'
import { Rating } from 'react-simple-star-rating'

import { IProduct } from '@/types/product.interface'

import { reviewService } from '@/services/review.service'

export function ProductRating({ product }: Readonly<{ product: IProduct }>) {
	const { data: rating } = useQuery({
		queryKey: ['get product rating', product.id],
		queryFn: () => reviewService.getAverageByProduct(product.id),
		select: ({ data }) => data
	})

	console.log(rating)

	return (
		<div className=''>
			<Rating
				readonly
				initialValue={rating}
				SVGstyle={{
					display: 'inline-block'
				}}
				size={34}
				allowFraction
				transition
			/>
			<span>
				<p>({rating?.toString()} reviews)</p>
			</span>
		</div>
	)
}
