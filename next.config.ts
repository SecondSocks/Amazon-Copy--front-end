import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	reactStrictMode: true,
	env: {
		SERVER_URL: process.env.SERVER_URL,
		APP_URL: process.env.APP_URL
	},
	async rewrites() {
		return [
			{
				source: '/category/:slug',
				destination: '/category/[slug]'
			},
			{
				source: '/favicon.svg',
				destination: '/public/favicon.svg'
			}
		]
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'picsum.photos',
				pathname: '**'
			},
			{
				protocol: 'https',
				hostname: 'example.com',
				pathname: '**'
			},
			{
				protocol: 'https',
				hostname: 'another-site.org',
				pathname: '**'
			},
			{
				protocol: 'https',
				hostname: 'avatars.githubusercontent.com',
				pathname: '**'
			},
			{
				protocol: 'https',
				hostname: 'new-site.com',
				pathname: '**'
			}
		],
		domains: ['picsum.photos']
	}
}

export default nextConfig
