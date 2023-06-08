import { Navigate, createBrowserRouter } from 'react-router-dom';

import { MainLayout } from '@/components';
import { lazyImport } from '@/utils/helpers';

const { Home } = lazyImport(() => import('@/pages'), 'Home');
const { MoviePopular } = lazyImport(() => import('@/pages'), 'MoviePopular');
const { MovieNowPlaying } = lazyImport(
	() => import('@/pages'),
	'MovieNowPlaying'
);

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: '/movie/popular',
				element: <MoviePopular />,
			},
			{
				path: '/movie/now_playing',
				element: <MovieNowPlaying />,
			},
			{ path: '*', element: <Navigate to="." /> },
		],
	},
]);

export default router;
