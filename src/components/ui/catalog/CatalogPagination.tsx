import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

import {
	EnumProductSort,
	TypePaginationProducts
} from '@/types/product.interface'

import { Heading } from '../Heading'
import { Button } from '../buttons/Button'

import { SortDropdown } from './SortDropdown'
import { ProductItem } from './product-item/ProductItem'
import { productService } from '@/services/products/product.service'

interface ICatalogPagination {
	data: TypePaginationProducts
	isLoading?: boolean
	title?: string
}

export function CatalogPagination({
	data,
	isLoading,
	title
}: Readonly<ICatalogPagination>) {
	const [sortType, setSortType] = useState<EnumProductSort>(
		EnumProductSort.NEWEST
	)
	const [page, setPage] = useState(1)
	const [perPage, setPerPage] = useState(4)

	const { data: response, isLoading: responseLoading } = useQuery({
		queryKey: ['products', sortType, page],
		queryFn: () =>
			productService.getAll({
				page,
				perPage,
				sort: sortType
			}),
		initialData: data
	})

	return (
		<>
			{title ? (
				<Heading className='text-5xl'>{title}</Heading>
			) : (
				<Heading>Catalog</Heading>
			)}
			<SortDropdown
				sortType={sortType}
				setSortType={setSortType}
			/>
			<section className='flex flex-col justify-center items-center'>
				<div className='grid grid-cols-4 gap-10 mt-8 justify-items-center'>
					{response.products?.map(product => (
						<ProductItem
							key={product.id}
							product={product}
						/>
					))}
				</div>
				<div className='flex gap-2 mt-20'>
					{page > 1 && (
						<Button
							variant='white'
							size='sm'
							onClick={() => setPage(prev => prev - 1)}
						>
							{'<'}-
						</Button>
					)}
					{Array.from({ length: Math.ceil(response.length / 4) }).map(
						(_, index) => {
							const pageNumber = index + 1
							return (
								<Button
									size='sm'
									variant={page === pageNumber ? 'orange' : 'white'}
									onClick={() => setPage(pageNumber)}
									key={pageNumber}
								>
									{pageNumber}
								</Button>
							)
						}
					)}
					{response.products?.length === perPage && (
						<Button
							variant='white'
							size='sm'
							onClick={() => setPage(prev => prev + 1)}
						>
							-{'>'}
						</Button>
					)}
				</div>
			</section>
		</>
	)
}
