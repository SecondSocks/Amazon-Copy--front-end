import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { persistor, store } from '@/store/store'

import AuthProvider from './auth-provider/AuthProvider'
import { TypeComponentAuthFields } from './auth-provider/auth-page.types'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

export function Providers({
	children: children,
	Component
}: AppProps & TypeComponentAuthFields) {
	return (
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<PersistGate
					loading={null}
					persistor={persistor}
				>
					<AuthProvider Component={Component}>{children}</AuthProvider>
				</PersistGate>
			</Provider>
		</QueryClientProvider>
	)
}
