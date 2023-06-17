import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { useGetMovieDetailQuery } from '@/app/services/movies';
import {
	CastList,
	MovieDetailInformation,
	MovieList,
	PrimaryOutlinedButton,
	Spinner,
} from '@/components';

export function MovieDetail() {
	const { id } = useParams();
	const navigate = useNavigate();

	const { data: movie, isLoading } = useGetMovieDetailQuery({
		id,
		append_to_response: 'similar,credits',
	});

	const similarMovies = movie?.similar?.results ?? [];
	const casts = movie?.credits.cast ?? [];

	if (isLoading) {
		return (
			<div className="w-full flex justify-center py-8">
				<Spinner />
			</div>
		);
	}

	return (
		<React.Fragment>
			<PrimaryOutlinedButton onClick={() => navigate(-1, { replace: true })}>
				Back
			</PrimaryOutlinedButton>
			<div className="space-y-4 sm:space-y-14">
				<MovieDetailInformation movie={movie} />
				<section className="cast">
					<CastList casts={casts} title="top casts" />
				</section>
				<section className="similar-movies">
					<MovieList movies={similarMovies} limit={0} title="similar movies" />
				</section>
			</div>
		</React.Fragment>
	);
}
