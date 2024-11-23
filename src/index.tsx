import { LicenseInfo } from '@mui/x-license'
import App from 'App'
import 'assets/scss/style.scss'
import { BASE_PATH } from 'config'
import { ConfigProvider } from 'contexts/ConfigContext'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from 'store'
import { client } from './api-read-license/client'
import Locales from './ui-components/common/Locales'

const license: any = '55a586c3b3a9cf71930c0c9179a409e3Tz05NDI5OCxFPTE3NTI2NjIxOTAwMDAsUz1wcm8sTE09c3Vic2NyaXB0aW9uLEtWPTI='
LicenseInfo.setLicenseKey(license)

client.setConfig({
	baseURL: import.meta.env.VITE_API_READ_LICENSE,
	headers: {
		'X-API-Key': import.meta.env.VITE_X_API_KEY
	}
})

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<ConfigProvider>
				<Locales>
					<BrowserRouter basename={BASE_PATH}>
						<App />
					</BrowserRouter>
				</Locales>
			</ConfigProvider>
		</PersistGate>
	</Provider>
)
