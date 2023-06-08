import { MovieGeneralInformation } from './general-information';
import { MovieRating } from './rating';
import { MovieHeader } from './header';
import { MovieLinks } from './links';
import { MovieGenres } from './genres';
import { MovieOverview } from './overview';
import { MoviePoster } from './poster';

export function MovieDetailInformation({ movie }) {
	return (
		<div className="flex flex-col lg:flex-row gap-8 sm:gap-12">
			<div className="movie-poster">
				<MoviePoster movie={movie} />
			</div>
			<article className="space-y-8">
				<MovieHeader movie={movie} />
				<section className="movie-rating">
					<MovieRating movie={movie} />
				</section>
				<section className="movie-information">
					<MovieGeneralInformation movie={movie} />
				</section>
				<section className="movie-overview">
					<MovieOverview movie={movie} />
				</section>
				<section className="movie-genres">
					<MovieGenres movie={movie} />
				</section>
				<section className="movie-links">
					<MovieLinks movie={movie} />
				</section>
			</article>
		</div>
	);
}
