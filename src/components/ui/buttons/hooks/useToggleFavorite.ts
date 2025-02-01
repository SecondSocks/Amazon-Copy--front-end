import { useMutation, useQueryClient } from '@tanstack/react-query'

import { userService } from '@/services/user.service'

export function useToggleFavorite(productId: string) {
	const queryClient = useQueryClient()

	const { mutate, isPending } = useMutation({
		mutationKey: ['toggle favorite'],
		mutationFn: () => userService.toggleFavorite(productId),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['get profile']
			})
		}
	})

	return { toggleFavorite: mutate, isFavoritePending: isPending }
}
