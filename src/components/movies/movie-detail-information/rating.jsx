import { numberWithCommas } from '@/utils/helpers';
import { BsFillStarFill } from 'react-icons/bs';

export function MovieRating({ movie }) {
	return (
		<div className="flex flex-col md:flex-row gap-2 justify-center lg:justify-start lg:gap-4 items-center">
			<span className="flex items-center gap-2 text-2xl">
				<BsFillStarFill className="text-yellow-400" />
				{movie.vote_average.toFixed(1)} Rating
			</span>
			<span>•</span>
			<span className="flex items-center gap-2 text-2xl">
				${numberWithCommas(movie.revenue)} Revenue
			</span>
		</div>
	);
}
