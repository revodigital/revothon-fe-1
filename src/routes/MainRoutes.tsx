// example routing
// const LazyComponent = Loadable(lazy(() => import('../views/example')))

// ==============================|| MAIN ROUTING ||============================== //

import MinimalLayout from 'layout/MinimalLayout'
import { lazy } from 'react'
import Loadable from 'ui-components/common/Loadable'
import LanguageSelection from 'views/default'
import LicenseAccessError from 'views/licenseAccessError'

const LazyComponent = Loadable(lazy(() => import('../views/licensePlateReader')))

const MainRoutes = {
	path: '/',
	element: <MinimalLayout />,
	children: [
		{
			path: '/scan',
			element: <LazyComponent />
		},

		{
			path: '/language',
			element: <LanguageSelection />
		},
		{
			path: '/accessFailed',
			element: <LicenseAccessError />
		},

		{
			path: '/scanFailed',
			element: <LicenseScanError />
		}
	]
}

export default MainRoutes
