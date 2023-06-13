import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	favoriteMovies: [],
};

const slice = createSlice({
	name: 'movies',
	initialState,
	reducers: {
		addMovieToFavorite: (state, action) => {
			state.favoriteMovies = [...state.favoriteMovies, action.payload];
		},
		removeMovieFromFavorite: (state, action) => {
			state.favoriteMovies = state.favoriteMovies.filter(
				(movie) => movie.id !== action.payload
			);
		},
	},
});

export const { addMovieToFavorite, removeMovieFromFavorite } = slice.actions;
export default slice.reducer;
