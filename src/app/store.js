import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { tmdbApi } from './services/api';
import { moviesReducer } from '@/features';

const persistedMoviesReducer = persistReducer(
	{
		key: 'root',
		storage,
	},
	moviesReducer
);

export const store = configureStore({
	reducer: {
		[tmdbApi.reducerPath]: tmdbApi.reducer,
		movies: persistedMoviesReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false }).concat(
			tmdbApi.middleware
		),
});

export const persistor = persistStore(store);
