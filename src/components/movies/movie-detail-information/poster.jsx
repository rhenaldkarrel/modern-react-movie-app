import { LazyImage } from '@/components';
import { getMoviePoster } from '@/utils/helpers';

export function MoviePoster({ movie }) {
	return (
		<LazyImage
			src={getMoviePoster(movie.poster_path)}
			alt={movie.title}
			className="rounded-lg w-full sm:min-w-[25rem] max-w-5xl"
		/>
	);
}
