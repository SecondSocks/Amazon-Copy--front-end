import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	reactStrictMode: true,
	env: {
		SERVER_URL: process.env.SERVER_URL,
		APP_URL: process.env.APP_URL
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
			}
		]
	}
}

export default nextConfig
