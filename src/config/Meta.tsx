'use client'

import Head from 'next/head'
import { usePathname } from 'next/navigation'
import { FC, PropsWithChildren } from 'react'

interface ISeo {
	title: string
	description?: string
	image?: string
}

export const titleMerge = (title: string) => `Amazon Clone | ${title}`

const Meta: FC<PropsWithChildren<ISeo>> = ({
	title,
	description,
	image,
	children
}) => {
	const asPath = usePathname()
	const currentUrl = `${process.env.APP_URL}${asPath}`
	const siteName = 'Amazon Clone'

	return (
		<>
			<Head>
				<title itemProp='headline'>{titleMerge(title)}</title>
				{description ? (
					<>
						<meta
							itemProp='description'
							name='description'
							content={description}
						/>
						<link
							rel='canonical'
							href={currentUrl}
						/>
						<meta
							property='og:locate'
							content='en'
						/>
						<meta
							property='og:title'
							content={titleMerge(title)}
						/>
						<meta
							property='og:url'
							content={currentUrl}
						/>
						<meta
							property='og:image'
							content={image || '/favicon.svg'}
						/>
						<meta
							property='og:description'
							content={description}
						/>
						<meta
							property='og:site_name'
							content={siteName}
						/>
					</>
				) : (
					<meta
						name='robots'
						content='noindex, nofollow'
					/>
				)}
			</Head>
			{children}
		</>
	)
}

export default Meta
