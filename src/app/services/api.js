import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { TMDB_ACCESS_TOKEN, TMDB_API_BASE_URL } from '@/utils/constants/tmdb';

const baseQuery = fetchBaseQuery({
	baseUrl: TMDB_API_BASE_URL,
	prepareHeaders: (headers) => {
		const token = TMDB_ACCESS_TOKEN;

		headers.set('authorization', `Bearer ${token}`);

		return headers;
	},
});

export const tmdbApi = createApi({
	reducerPath: 'tmdbApi',
	baseQuery,
	endpoints: () => ({}),
	tagTypes: ['Movies', 'TVs'],
});
