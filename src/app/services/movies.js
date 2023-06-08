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
				if (newItems.page > 1) {
					currentCache.results.push(...newItems.results);
					return;
				}
				return newItems;
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
				if (newItems.page > 1) {
					currentCache.results.push(...newItems.results);
					return;
				}
				return newItems;
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
				if (newItems.page > 1) {
					currentCache.results.push(...newItems.results);
					return;
				}
				return newItems;
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
				if (newItems.page > 1) {
					currentCache.results.push(...newItems.results);
					return;
				}
				return newItems;
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
		getTrendingMovies: build.query({
			query: (arg) => {
				const { page, time_window = 'day' } = arg;

				return {
					url: `trending/movie/${time_window}`,
					params: {
						page,
					},
				};
			},
			serializeQueryArgs: ({ endpointName }) => {
				return endpointName;
			},
			merge: (currentCache, newItems) => {
				if (newItems.page > 1) {
					currentCache.results.push(...newItems.results);
					return;
				}
				return newItems;
			},
			forceRefetch({ currentArg, previousArg }) {
				return currentArg !== previousArg;
			},
			providesTags: ['TrendingMovies'],
		}),
	}),
});

export const {
	useGetPopularMoviesQuery,
	useGetNowPlayingMoviesQuery,
	useGetTopRatedMoviesQuery,
	useGetUpcomingMoviesQuery,
	useGetMovieDetailQuery,
	useGetTrendingMoviesQuery,
} = moviesApi;
