import { configureStore } from '@reduxjs/toolkit';

import { tmdbApi } from './services/api';
import { moviesReducer } from '@/features';

export const store = configureStore({
	reducer: {
		[tmdbApi.reducerPath]: tmdbApi.reducer,
		movies: moviesReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false }).concat(
			tmdbApi.middleware
		),
});
