import { Heading } from '@/ui/Heading'
import { Catalog } from '@/ui/catalog/Catalog'

import { TypePaginationProducts } from '@/types/product.interface'

import Meta from '@/config/Meta'

export function Home({ products, length }: Readonly<TypePaginationProducts>) {
	return (
		<Meta title='Home'>
			<Heading>Home</Heading>

			<Catalog products={products} />
		</Meta>
	)
}
