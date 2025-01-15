import { useMutation, useQueryClient } from '@tanstack/react-query'

import { userService } from '@/services/user.service'

export function useToggleFavorite(productId: string) {
	const { invalidateQueries } = useQueryClient()

	const { mutate, isPending } = useMutation({
		mutationKey: ['toggle favorite'],
		mutationFn: () => userService.toggleFavorite(productId),
		onSuccess() {
			invalidateQueries({
				queryKey: ['get profile']
			})
		}
	})

	return { toggleFavorite: mutate, isFavoritePending: isPending }
}
