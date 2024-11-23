import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { DirectusAuthProvider } from 'directus/DirectusAuthProvider'
import NavigationScroll from 'layout/NavigationScroll'
import { useMemo } from 'react'
import Routes from 'routes'
import ThemeCustomization from 'themes'
import Snackbar from './ui-components/components/Snackbar'

const queryClient = new QueryClient()
const authProvider = new DirectusAuthProvider('https://rvthn1.revod.services')
export const directusClient = authProvider.getDirectusInstance()

// ==============================|| APP ||============================== //

const normalUrl = 'admin@rvthn1.it'

const App = () => {
	useMemo(async () => {
		await directusClient.login(import.meta.env.VITE_USERNAME, import.meta.env.VITE_PASSWORD)
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
