import { Link } from 'react-router-dom';

import { getMoviePoster, getYear } from '@/utils/helpers';
import { BsFillStarFill } from 'react-icons/bs';

export function TrendingMovieCard({ movie }) {
	return (
		<Link
			to={`/movie/${movie.id}`}
			className="movie-card group relative cursor-pointer transition-all space-y-2 flex flex-col"
			title={movie.title}
		>
			<div className="movie-poster overflow-hidden rounded-lg grow">
				<img
					src={getMoviePoster(movie.backdrop_path)}
					alt={movie.title}
					className="aspect-video w-full h-full min-w-[300px] object-cover overflow-hidden transition-all group-hover:scale-110"
					loading="lazy"
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
				<h3 className="font-medium truncate text-lg">{movie.original_title}</h3>
			</div>
		</Link>
	);
}
