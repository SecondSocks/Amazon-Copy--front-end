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
			{title ? (
				<Heading className='text-5xl'>{title}</Heading>
			) : (
				<Heading>Catalog</Heading>
			)}
			<section className='flex flex-col justify-center items-center'>
				<div className='grid grid-cols-4 gap-10 mt-8 justify-items-center'>
					{products?.map(product => (
						<ProductItem
							key={product.id}
							product={product}
						/>
					))}
				</div>
			</section>
		</>
	)
}
