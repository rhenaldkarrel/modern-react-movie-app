import { MdFavorite, MdOutlineFavoriteBorder } from 'react-icons/md';

import { LazyImage } from '@/components';
import { useFavorites } from '@/hooks';
import { getMoviePoster } from '@/utils/helpers';

export function MoviePoster({ movie }) {
	const { addToFavorites, isFavorite } = useFavorites();

	return (
		<div className="relative">
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
			<LazyImage
				src={getMoviePoster(movie.poster_path)}
				alt={movie.title}
				className="rounded-lg w-full sm:min-w-[25rem] max-w-5xl"
			/>
		</div>
	);
}
