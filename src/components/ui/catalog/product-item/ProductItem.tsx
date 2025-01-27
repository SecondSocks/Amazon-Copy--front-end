import Image from 'next/image'

import { AddToCartButton } from '@/ui/buttons/AddToCartButton'
import { FavoriteButton } from '@/ui/buttons/FavoriteButton'

import { IProduct } from '@/types/product.interface'

import { ProductRating } from './ProductRating'

export function ProductItem({ product }: Readonly<{ product: IProduct }>) {
	return (
		<div>
			<div>
				<FavoriteButton productId={product.id} />
				<AddToCartButton {...product} />
				<Image
					width={300}
					height={300}
					src={product.images[0]}
					alt={product.name}
				/>
			</div>
			<h3>{product.name}</h3>
			<h5>{product.category.name}</h5>
			<ProductRating product={product} />
			<h4>{product.price}</h4>
		</div>
	)
}
