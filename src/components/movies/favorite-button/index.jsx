import { MdFavorite, MdOutlineFavoriteBorder } from 'react-icons/md';

import { useFavorites } from '@/hooks';

export function FavoriteButton({ movie }) {
	const { isFavorite, addToFavorites } = useFavorites();

	return (
		<div className="absolute top-0 right-0 z-[1]">
			<button
				type="button"
				className="mr-4 mt-4 bg-slate-500 p-2 rounded-full transition-all hover:bg-slate-800"
				onClick={() => addToFavorites(movie)}
			>
				{isFavorite(movie.id) ? (
					<MdFavorite fill="red" />
				) : (
					<MdOutlineFavoriteBorder />
				)}
				<span className="sr-only">Add Movie to Favorite</span>
			</button>
		</div>
	);
}
