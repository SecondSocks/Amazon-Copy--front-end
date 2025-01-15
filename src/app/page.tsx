import { Metadata } from 'next'

import { Meta } from '@/constants/seo.constant'

import { Home } from '@/screens/Home'

export const metadata: Metadata = Meta

function HomePage() {
	return <Home />
}

export default HomePage
