import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { DirectusAuthProvider } from 'directus/DirectusAuthProvider'
import NavigationScroll from 'layout/NavigationScroll'
import Routes from 'routes'
import ThemeCustomization from 'themes'
import Snackbar from './ui-components/components/Snackbar'
import { useMemo } from 'react'

const queryClient = new QueryClient()
const authProvider = new DirectusAuthProvider('https://rvthn1.revod.services')
export const directusClient = authProvider.getDirectusInstance()

// ==============================|| APP ||============================== //

const App = () => {
	useMemo(() => {
		directusClient.login(import.meta.env.VITE_USERNAME, import.meta.env.VITE_PASSWORD)
	}, [])

	return (
		<ThemeCustomization>
			<NavigationScroll>
				<QueryClientProvider client={queryClient}>
					<>
						<Routes />
						<Snackbar />
					</>
				</QueryClientProvider>
			</NavigationScroll>
		</ThemeCustomization>
	)
}

export default App
