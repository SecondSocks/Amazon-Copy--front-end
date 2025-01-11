import { Metadata } from 'next'

export const NO_INDEX_PAGE = { robots: { index: false, follow: false } } // Означает, что страница не будет индексирована и не будет следить за ссылками
export const SITE_NAME = 'Amazon v2.0'

export const Meta: Metadata = {
	title: {
		default: SITE_NAME,
		template: `%s | ${SITE_NAME}`
	},
	description: 'Amazon v2.0 clone'
}
