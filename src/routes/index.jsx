import { Navigate, createBrowserRouter } from 'react-router-dom';

import { MainLayout } from '@/components';
import { lazyImport } from '@/utils/helpers';

const { Home } = lazyImport(() => import('@/pages'), 'Home');

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{ path: '*', element: <Navigate to="." /> },
		],
	},
]);

export default router;
