import { useDispatch, useSelector } from 'react-redux';
import { addMovieToFavorite, removeMovieFromFavorite } from '@/features';

export function useFavorites() {
	const favorites = useSelector((state) => state.movies.favoriteMovies);
	const dispatch = useDispatch();

	const isFavorite = (movieId) =>
		favorites?.some((item) => item.id === movieId);

	const addToFavorites = (movie) => {
		if (!movie) return;

		if (!isFavorite(movie.id)) {
			dispatch(addMovieToFavorite(movie));
		} else {
			dispatch(removeMovieFromFavorite(movie.id));
		}
	};

	return { favorites, isFavorite, addToFavorites };
}
