import React from 'react';

import { useGetPopularMoviesQuery } from '@/app/services/movies';
import { MovieList } from '@/components';

const Home = () => {
	const { data } = useGetPopularMoviesQuery();

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
};

export default Home;
