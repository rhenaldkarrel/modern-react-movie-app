import { Navigate, createBrowserRouter } from 'react-router-dom';

import { MainLayout } from '@/components';
import { lazyImport } from '@/utils/helpers';

const { Home } = lazyImport(() => import('@/pages'), 'Home');
const { MoviePopular } = lazyImport(() => import('@/pages'), 'MoviePopular');
const { MovieNowPlaying } = lazyImport(
	() => import('@/pages'),
	'MovieNowPlaying'
);
const { MovieTopRated } = lazyImport(() => import('@/pages'), 'MovieTopRated');
const { MovieUpcoming } = lazyImport(() => import('@/pages'), 'MovieUpcoming');
const { MovieDetail } = lazyImport(() => import('@/pages'), 'MovieDetail');
const { MovieTrending } = lazyImport(() => import('@/pages'), 'MovieTrending');

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
				path: '/movie/:id',
				element: <MovieDetail />,
			},
			{
				path: '/movie/popular',
				element: <MoviePopular />,
			},
			{
				path: '/movie/now_playing',
				element: <MovieNowPlaying />,
			},
			{
				path: '/movie/top_rated',
				element: <MovieTopRated />,
			},
			{
				path: '/movie/upcoming',
				element: <MovieUpcoming />,
			},
			{
				path: '/movie/trending',
				element: <MovieTrending />,
			},
			{ path: '*', element: <Navigate to="." /> },
		],
	},
]);

export default router;
