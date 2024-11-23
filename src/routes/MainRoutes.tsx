// example routing
// const LazyComponent = Loadable(lazy(() => import('../views/example')))

// ==============================|| MAIN ROUTING ||============================== //

import MinimalLayout from 'layout/MinimalLayout'
import { lazy } from 'react'
import Loadable from 'ui-components/common/Loadable'
import LanguageSelection from 'views/default'
import SuccessPage from 'views/licenseAccessComplete'
import LicenseAccessError from 'views/licenseAccessError'
import ScanErrorPage from 'views/licenseScanError'
import QAPage from 'views/q&a'
import WelcomePage from 'views/welcomePage'

const LazyComponent = Loadable(lazy(() => import('../views/licensePlateReader')))

const MainRoutes = {
	path: '/',
	element: <MinimalLayout />,
	children: [
		// Welcome page
		{
			path: '/',
			element: <WelcomePage />
		},

		// Language page
		{
			path: '/language',
			element: <LanguageSelection />
		},

		// Scan page
		{
			path: '/scan',
			element: <LazyComponent />
		},

		// Page to handle access failed
		{
			path: '/accessFailed',
			element: <LicenseAccessError />
		},

		// Page to handle scan failed
		{
			path: '/scanFailed',
			element: <ScanErrorPage />
		},

		// Page q&a
		{
			path: '/qa',
			element: <QAPage />
		},

		// Page to handle success login
		{
			path: '/successPage',
			element: <SuccessPage />
		}
	]
}

export default MainRoutes
