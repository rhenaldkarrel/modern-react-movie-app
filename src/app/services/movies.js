import { tmdbApi } from './api';

export const moviesApi = tmdbApi.injectEndpoints({
	endpoints: (build) => ({
		getPopularMovies: build.query({
			query: () => 'movie/popular',
			providesTags: ['PopularMovies'],
		}),
	}),
});

export const { useGetPopularMoviesQuery } = moviesApi;
