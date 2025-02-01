'use client'

import { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

import { IProduct } from '@/types/product.interface'

export function ProductRating({ product }: Readonly<{ product: IProduct }>) {
	//const { rating, isLoading } = useRating(product.id)
	const [rating] = useState<number>(
		Math.round(
			product.reviews.reduce((acc, review) => acc + review.rating, 0) /
				product.reviews.length
		)
	)

	return (
		<div className='flex items-center mb-2'>
			<span className='flex items-center justify-center gap-2 mr-1'>
				<Rating
					readonly
					initialValue={rating}
					SVGstyle={{
						display: 'inline-block'
					}}
					size={20}
					allowFraction
					transition
				/>
				<p className='text-yellow-500 text-[17px] text-center pt-1.5'>{rating}</p>
			</span>
			<span className='pt-1'>
				<p className='text-xs'>({product.reviews.length} reviews)</p>
			</span>
		</div>
	)
}
