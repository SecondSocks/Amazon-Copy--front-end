import { useQuery } from '@tanstack/react-query'

import { IFullUser } from '@/types/user.types'

import { userService } from '@/services/user.service'

export function useProfile() {
	const { data, isLoading } = useQuery({
		queryKey: ['get profile'],
		queryFn: () => userService.getProfile(),
		select: ({ data }) => data
	})

	return { profile: data || ({} as IFullUser), profileLoading: isLoading }
}
