import { useQuery } from '@tanstack/react-query'

import { IProduct } from '@/types/product.interface'

export function ProductRating(product: IProduct) {
	const {} = useQuery({
		queryKey: ['get product rating', product.id]
	})

	return <div>ProductRating</div>
}
