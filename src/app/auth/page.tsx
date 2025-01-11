import { Metadata } from 'next'

import { Meta } from '@/constants/seo.constant'

import { Auth } from '@/screens/auth/Auth'

export const metadata: Metadata = Meta
export default function AuthPage() {
	return <Auth />
}
