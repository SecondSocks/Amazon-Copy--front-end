'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Golos_Text } from 'next/font/google'
import { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

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
			<body className={`${golosText.className} antialiased`}>
				<QueryClientProvider client={queryClient}>
					<Provider store={store}>
						<PersistGate
							loading={null}
							persistor={persistor}
						>
							<AuthProvider Component={{ isOnlyUser }}>{children}</AuthProvider>
						</PersistGate>
					</Provider>
				</QueryClientProvider>
			</body>
		</html>
	)
}
