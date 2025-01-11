'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

import { useAuth } from '@/hooks/useAuth'

export function useAuthRedirect() {
	const { user } = useAuth()

	const { replace } = useRouter()

	useEffect(() => {
		if (user) replace('/')
	}, [user])
	return {}
}
