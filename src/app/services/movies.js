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
	}),
});

export const { useGetPopularMoviesQuery } = moviesApi;
