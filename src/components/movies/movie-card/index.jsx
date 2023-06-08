import clsx from 'clsx';
import { BsFillStarFill } from 'react-icons/bs';

import { getYear } from '@/utils/helpers';
import { TMDB_IMAGE_BASE_URL } from '@/utils/constants/tmdb';

export function MovieCard({ movie }) {
	return (
		<div
			className={clsx(
				'group relative cursor-pointer transition-all space-y-2 after:transition-all',
				'hover:after:content-none hover:after:absolute hover:after:w-full hover:after:h-full hover:after:top-0 hover:after:left-0 hover:after:z-[1] hover:after:bg-black hover:after:opacity-25'
			)}
			title={movie.title}
			key={movie.id}
		>
			<div className="overflow-hidden rounded-lg">
				<img
					src={
						movie.poster_path
							? TMDB_IMAGE_BASE_URL + movie.poster_path
							: '/img-placeholder.jpg'
					}
					alt={movie.title}
					className="aspect-[9 / 16] w-full object-cover overflow-hidden sm:max-w-[250px] transition-all group-hover:scale-110"
					loading="lazy"
				/>
			</div>
			<div className="">
				<p className="flex text-sm gap-2">
					{getYear(movie.release_date)} <span>•</span>
					<span className="flex items-center gap-1">
						<BsFillStarFill className="text-yellow-400" />
						{movie.vote_average}
					</span>
				</p>
				<h3 className="font-medium truncate text-lg">{movie.original_title}</h3>
			</div>
		</div>
	);
}
