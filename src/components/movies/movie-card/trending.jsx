import { Link } from 'react-router-dom';
import { MdFavorite, MdOutlineFavoriteBorder } from 'react-icons/md';

import { getMoviePoster, getYear } from '@/utils/helpers';
import { BsFillStarFill } from 'react-icons/bs';
import { LazyImage } from '@/components';
import { useFavorites } from '@/hooks';

export function TrendingMovieCard({ movie }) {
	const { isFavorite, addToFavorites } = useFavorites();

	return (
		<div className="movie-card group relative cursor-pointer transition-all space-y-2 flex flex-col">
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
			<Link
				to={`/movie/${movie.id}`}
				className="movie-card-link"
				title={movie.title}
			>
				<div className="movie-poster overflow-hidden rounded-lg grow">
					<LazyImage
						src={getMoviePoster(movie.backdrop_path)}
						alt={movie.title}
						className="aspect-video w-full h-full min-w-[300px] object-cover overflow-hidden transition-all group-hover:scale-110"
					/>
				</div>
				<div className="movie-information">
					<p className="flex text-sm gap-2">
						{getYear(movie.release_date)} <span>•</span>
						<span className="flex items-center gap-1">
							<BsFillStarFill className="text-yellow-400" />
							{movie.vote_average.toFixed(1)}
						</span>
					</p>
					<h3 className="font-medium truncate text-lg">
						{movie.original_title}
					</h3>
				</div>
			</Link>
		</div>
	);
}
