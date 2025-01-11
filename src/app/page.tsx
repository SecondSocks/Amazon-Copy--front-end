import { Metadata } from 'next'

import { Meta } from '@/constants/seo.constant'

export const metadata: Metadata = Meta

function HomePage() {
	return (
		<div>
			<h1 className='text-3xl font-bold underline text-white'>Home Page</h1>
		</div>
	)
}

export default HomePage
