import React from 'react';

import { MovieCard } from '../movie-card';
import { Heading } from './heading';
import { sliceMovies } from '@/utils/helpers';

export function MovieList({ movies, title, href, limit = 10 }) {
	return (
		<React.Fragment>
			<Heading title={title} href={href} />
			<div className="movies grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
				{sliceMovies(movies, limit).map((movie) => (
					<MovieCard movie={movie} key={movie.id} />
				))}
			</div>
		</React.Fragment>
	);
}
