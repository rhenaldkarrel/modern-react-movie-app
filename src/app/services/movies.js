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
			providesTags: ['Movies'],
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
			providesTags: ['Movies'],
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
			providesTags: ['Movies'],
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
			providesTags: ['Movies'],
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
			providesTags: ['Movies'],
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
			providesTags: ['Movies'],
		}),
		getMoviesByQuery: build.query({
			query: (arg) => {
				const { page, query } = arg;

				return {
					url: 'search/movie',
					params: {
						page,
						query,
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
			providesTags: ['Movies'],
		}),
		getMoviesByGenre: build.query({
			query: (arg) => {
				const { with_genres, page } = arg;

				return {
					url: 'discover/movie',
					params: {
						with_genres,
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
			providesTags: ['Movies'],
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
	useGetMoviesByQueryQuery,
	useGetMoviesByGenreQuery,
} = moviesApi;
