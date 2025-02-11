import { useQuery } from '@tanstack/react-query'

import { categoryService } from '@/services/category.service'

export function useCategories() {
	const { data, isLoading } = useQuery({
		queryKey: ['get categories'],
		queryFn: () => categoryService.getAll(),
		select: ({ data }) => data
	})

	return { data, isLoading }
}
