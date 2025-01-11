import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { persistor, store } from '@/store/store'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

export function Providers(children: React.ReactNode) {
	return (
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<PersistGate
					loading={null}
					persistor={persistor}
				>
					{children}
				</PersistGate>
			</Provider>
		</QueryClientProvider>
	)
}
