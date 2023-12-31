import { LazyImage } from '@/components';
import { getTmdbImage } from '@/utils/helpers';
import { FavoriteButton } from '../favorite-button';

export function MoviePoster({ movie }) {
	return (
		<div className="relative">
			<FavoriteButton movie={movie} />
			<LazyImage
				src={getTmdbImage(movie.poster_path)}
				alt={movie.title}
				className="rounded-lg w-full sm:min-w-[25rem] max-w-5xl"
			/>
		</div>
	);
}
