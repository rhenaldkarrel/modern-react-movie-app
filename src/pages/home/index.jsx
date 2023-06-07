import React from 'react';

import { useGetPopularMoviesQuery } from '@/app/services/movies';
import { MovieList } from '@/components';

export function Home() {
	const { data } = useGetPopularMoviesQuery({ page: 1 });

	const popularMovies = data?.results ?? [];

	return (
		<React.Fragment>
			<section className="popular-movies">
				<MovieList
					movies={popularMovies}
					title="popular movies"
					href="/movie/popular"
				/>
			</section>
		</React.Fragment>
	);
}
