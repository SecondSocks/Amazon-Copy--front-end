import Image from 'next/image'
import Link from 'next/link'

import { AddToCartButton } from '@/ui/buttons/AddToCartButton'
import { FavoriteButton } from '@/ui/buttons/FavoriteButton'

import { IProduct } from '@/types/product.interface'

import { convertPrice } from '@/utils/convert-price'

import { ProductRating } from './ProductRating'

export function ProductItem({ product }: Readonly<{ product: IProduct }>) {
	return (
		<div className='flex flex-col w-[300px] animate-scaleIn'>
			<div className='rounded-xl relative overflow-hidden bg-white'>
				<div className='absolute top-2 right-3 z-10'>
					<FavoriteButton productId={product.id} />
					<AddToCartButton {...product} />
				</div>
				<Link href={`/product/${product.slug}`}>
					<Image
						width={300}
						height={300}
						src={product.images[0]}
						alt={product.name}
					/>
				</Link>
			</div>
			<Link
				href={`/product/${product.slug}`}
				className='mt-2 font-semibold text-xl'
			>
				{product.name}
			</Link>
			<Link
				href={`/category/${product.category.slug}`}
				className='text-cyan-400 text-xs mb-2'
			>
				{product.category.name}
			</Link>
			<ProductRating product={product} />
			<h4 className='font-semibold text-xl'>{convertPrice(product.price)}</h4>
		</div>
	)
}
