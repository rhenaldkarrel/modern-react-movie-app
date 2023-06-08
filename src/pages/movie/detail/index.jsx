import { useParams } from 'react-router-dom';

import { useGetMovieDetailQuery } from '@/app/services/movies';
import { MovieDetailInformation, MovieList, Spinner } from '@/components';

export function MovieDetail() {
	const { id } = useParams();

	const { data: movie, isLoading } = useGetMovieDetailQuery({
		id,
		append_to_response: 'similar',
	});

	const similarMovies = movie?.similar?.results ?? [];

	if (isLoading) {
		return (
			<div className="w-full flex justify-center py-8">
				<Spinner />
			</div>
		);
	}

	return (
		<div className="space-y-4 sm:space-y-14">
			<MovieDetailInformation movie={movie} />
			<section className="similar-movies">
				<MovieList movies={similarMovies} limit={0} title="similar movies" />
			</section>
		</div>
	);
}
