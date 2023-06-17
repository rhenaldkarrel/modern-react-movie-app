import { Link } from 'react-router-dom';

import { getMoviePoster, getYear } from '@/utils/helpers';
import { BsFillStarFill } from 'react-icons/bs';
import { LazyImage } from '@/components';
import { FavoriteButton } from '../favorite-button';

export function TrendingMovieCard({ movie }) {
	return (
		<div className="movie-card group relative cursor-pointer transition-all flex flex-col">
			<FavoriteButton movie={movie} />
			<Link
				to={`/movie/${movie.id}`}
				className="movie-card-link space-y-2"
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
