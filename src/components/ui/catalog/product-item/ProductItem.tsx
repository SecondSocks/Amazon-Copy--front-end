import Image from 'next/image'

import { AddToCartButton } from '@/ui/buttons/AddToCartButton'
import { FavoriteButton } from '@/ui/buttons/FavoriteButton'

import { IProduct } from '@/types/product.interface'

export function ProductItem(product: IProduct) {
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
			<ProductRating rating={product.reviews} />
			<h4>{product.price}</h4>
		</div>
	)
}
