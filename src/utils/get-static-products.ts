import { GetStaticProps } from 'next'

import { TypePaginationProducts } from '@/types/product.interface'

import { productService } from '@/services/products/product.service'

export const getStaticProps: GetStaticProps<
	TypePaginationProducts
> = async () => {
	const { data } = await productService.getAll({
		page: 1,
		perPage: 10
	})

	return {
		props: data
	}
}
