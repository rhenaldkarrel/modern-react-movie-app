import React from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';

import { MainLayout } from '@/components';

const Home = React.lazy(() => import('@/pages/home'));

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
