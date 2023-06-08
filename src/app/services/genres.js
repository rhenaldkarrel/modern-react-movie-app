import { tmdbApi } from './api';

export const genresApi = tmdbApi.injectEndpoints({
	endpoints: (build) => ({
		getMovieGenres: build.query({
			query: () => 'genre/movie/list',
			providesTags: ['Movies'],
		}),
	}),
});

export const { useGetMovieGenresQuery } = genresApi;
