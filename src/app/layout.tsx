'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Golos_Text } from 'next/font/google'
import Head from 'next/head'
import { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { Header } from '@/ui/Header/Header'
import { Sidebar } from '@/ui/Sidebar/Sidebar'

import AuthProvider from '@/providers/auth-provider/AuthProvider'
import { TypeRoles } from '@/providers/auth-provider/auth-page.types'

import { persistor, store } from '@/store/store'

import './globals.scss'

const golosText = Golos_Text({
	variable: '--font-golos-text',
	subsets: ['latin']
})

const queryClient = new QueryClient()

export default function RootLayout({
	children,
	isOnlyUser
}: PropsWithChildren<TypeRoles>) {
	return (
		<html lang='en'>
			<Head>
				<title>Amazon 2.0</title>
			</Head>
			<body className={`${golosText.className} antialiased`}>
				<QueryClientProvider client={queryClient}>
					<Provider store={store}>
						<PersistGate
							loading={null}
							persistor={persistor}
						>
							<AuthProvider Component={{ isOnlyUser }}>
								<Header />
								<div
									className='grid'
									style={{
										gridTemplateColumns: '1fr 6fr'
									}}
								>
									<Sidebar />
									<main className='p-12'>{children}</main>
								</div>
							</AuthProvider>
						</PersistGate>
					</Provider>
				</QueryClientProvider>
			</body>
		</html>
	)
}
