import { IProduct } from '@/types/product.interface'

import { ProductItem } from './product-item/ProductItem'

export function Catalog({
													products,
													isLoading
												}: Readonly<{
	products: IProduct[]
	isLoading?: boolean
}>) {
	return (
		<section className="grid grid-cols-4 gap-10">
			{isLoading
				? 'Loading...'
				: products?.map(product => (
					<ProductItem
						key={product.id}
						product={product}
					/>
				))}
		</section>
	)
}
