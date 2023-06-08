import { Link } from 'react-router-dom';
import { BsFillStarFill } from 'react-icons/bs';

import { getMoviePoster, getYear } from '@/utils/helpers';

export function MovieCard({ movie }) {
	return (
		<Link
			to={`/movie/${movie.id}`}
			className="movie-card group relative cursor-pointer transition-all space-y-2 flex flex-col"
			title={movie.title}
			key={movie.id}
		>
			<div className="movie-poster overflow-hidden rounded-lg grow">
				<img
					src={getMoviePoster(movie.poster_path)}
					alt={movie.title}
					className="aspect-[9 / 16] w-full h-full object-cover overflow-hidden sm:max-w-[250px] transition-all group-hover:scale-110"
					loading="lazy"
				/>
			</div>
			<div className="movie-information">
				<p className="flex text-sm gap-2">
					{getYear(movie.release_date)} <span>•</span>
					<span className="flex items-center gap-1">
						<BsFillStarFill className="text-yellow-400" />
						{movie.vote_average}
					</span>
				</p>
				<h3 className="font-medium truncate text-lg">{movie.original_title}</h3>
			</div>
		</Link>
	);
}
