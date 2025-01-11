'use client'

import Cookies from 'js-cookie'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'
import { FC, PropsWithChildren, useEffect } from 'react'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

import { TypeComponentAuthFields } from './auth-page.types'
import { getAccessToken } from '@/services/auth/auth.helper'

const DynamicCheckRole = dynamic(() => import('./CheckRole'), { ssr: false })

const AuthProvider: FC<PropsWithChildren<TypeComponentAuthFields>> = ({
	Component: { isOnlyUser },
	children
}) => {
	const { user } = useAuth()
	const { checkAuth, logout } = useActions()

	const router = useRouter()
	const pathname = router

	useEffect(() => {
		const checkAccessToken = async () => {
			const accessToken = await getAccessToken()

			if (accessToken) checkAuth()
		}

		checkAccessToken()
	}, [])

	useEffect(() => {
		const refreshToken = Cookies.get('refreshToken')

		if (!refreshToken && user) logout()
	}, [pathname])

	return isOnlyUser ? (
		<DynamicCheckRole Component={{ isOnlyUser }}>{children}</DynamicCheckRole>
	) : (
		<>{children}</>
	)
}

export default AuthProvider
