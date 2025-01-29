import { IProduct } from '@/types/product.interface'

import { Heading } from '../Heading'

import { ProductItem } from './product-item/ProductItem'

interface ICatalog {
	products: IProduct[]
	isLoading?: boolean
	title?: string
}

export function Catalog({ products, isLoading, title }: Readonly<ICatalog>) {
	return (
		<>
			{title ? <Heading>{title}</Heading> : <Heading>Catalog</Heading>}
			<section className='grid grid-cols-4 gap-10 py-8 px-0 justify-items-center'>
				{isLoading
					? 'Loading...'
					: products?.map(product => (
							<ProductItem
								key={product.id}
								product={product}
							/>
						))}
			</section>
		</>
	)
}
