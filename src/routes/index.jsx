import { Navigate, createBrowserRouter } from 'react-router-dom';

import { MainLayout } from '@/components';
import { lazyImport } from '@/utils/helpers';

const { Home } = lazyImport(() => import('@/pages'), 'Home');
const { Login } = lazyImport(() => import('@/pages'), 'Login');
const { MoviePopular } = lazyImport(() => import('@/pages'), 'MoviePopular');
const { MovieNowPlaying } = lazyImport(
	() => import('@/pages'),
	'MovieNowPlaying'
);
const { MovieTopRated } = lazyImport(() => import('@/pages'), 'MovieTopRated');
const { MovieUpcoming } = lazyImport(() => import('@/pages'), 'MovieUpcoming');
const { MovieDetail } = lazyImport(() => import('@/pages'), 'MovieDetail');
const { MovieTrending } = lazyImport(() => import('@/pages'), 'MovieTrending');
const { MovieSearch } = lazyImport(() => import('@/pages'), 'MovieSearch');
const { MovieGenres } = lazyImport(() => import('@/pages'), 'MovieGenres');
const { GenreMovieList } = lazyImport(
	() => import('@/pages'),
	'GenreMovieList'
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
				path: 'login',
				element: <Login />,
			},
			{
				path: '/movie',
				children: [
					{
						path: ':id',
						element: <MovieDetail />,
					},
					{
						path: 'popular',
						element: <MoviePopular />,
					},
					{
						path: 'now_playing',
						element: <MovieNowPlaying />,
					},
					{
						path: 'top_rated',
						element: <MovieTopRated />,
					},
					{
						path: 'upcoming',
						element: <MovieUpcoming />,
					},
					{
						path: 'trending',
						element: <MovieTrending />,
					},
					{
						path: 'search',
						element: <MovieSearch />,
					},
					{
						path: 'genre',
						children: [
							{
								index: true,
								element: <MovieGenres />,
							},
							{
								path: ':id',
								element: <GenreMovieList />,
							},
						],
					},
				],
			},
			{ path: '*', element: <Navigate to="." /> },
		],
	},
]);

export default router;
