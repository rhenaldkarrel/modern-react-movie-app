import { tmdbApi } from './api';

export const moviesApi = tmdbApi.injectEndpoints({
	endpoints: (build) => ({
		getPopularMovies: build.query({
			query: (arg) => {
				const { page } = arg;

				return {
					url: 'movie/popular',
					params: {
						page,
					},
				};
			},
			serializeQueryArgs: ({ endpointName }) => {
				return endpointName;
			},
			merge: (currentCache, newItems) => {
				currentCache.results.push(...newItems.results);
			},
			forceRefetch({ currentArg, previousArg }) {
				return currentArg !== previousArg;
			},
			providesTags: ['PopularMovies'],
		}),
		getNowPlayingMovies: build.query({
			query: (arg) => {
				const { page } = arg;

				return {
					url: 'movie/now_playing',
					params: {
						page,
					},
				};
			},
			serializeQueryArgs: ({ endpointName }) => {
				return endpointName;
			},
			merge: (currentCache, newItems) => {
				currentCache.results.push(...newItems.results);
			},
			forceRefetch({ currentArg, previousArg }) {
				return currentArg !== previousArg;
			},
			providesTags: ['NowPlayingMovies'],
		}),
		getTopRatedMovies: build.query({
			query: (arg) => {
				const { page } = arg;

				return {
					url: 'movie/top_rated',
					params: {
						page,
					},
				};
			},
			serializeQueryArgs: ({ endpointName }) => {
				return endpointName;
			},
			merge: (currentCache, newItems) => {
				currentCache.results.push(...newItems.results);
			},
			forceRefetch({ currentArg, previousArg }) {
				return currentArg !== previousArg;
			},
			providesTags: ['TopRatedMovies'],
		}),
		getUpcomingMovies: build.query({
			query: (arg) => {
				const { page } = arg;

				return {
					url: 'movie/upcoming',
					params: {
						page,
					},
				};
			},
			serializeQueryArgs: ({ endpointName }) => {
				return endpointName;
			},
			merge: (currentCache, newItems) => {
				currentCache.results.push(...newItems.results);
			},
			forceRefetch({ currentArg, previousArg }) {
				return currentArg !== previousArg;
			},
			providesTags: ['UpcomingMovies'],
		}),
		getMovieDetail: build.query({
			query: (arg) => {
				const { id, append_to_response } = arg;

				return {
					url: `movie/${id}`,
					params: {
						id,
						append_to_response,
					},
				};
			},
			providesTags: ['MovieDetail'],
		}),
	}),
});

export const {
	useGetPopularMoviesQuery,
	useGetNowPlayingMoviesQuery,
	useGetTopRatedMoviesQuery,
	useGetUpcomingMoviesQuery,
	useGetMovieDetailQuery,
} = moviesApi;
