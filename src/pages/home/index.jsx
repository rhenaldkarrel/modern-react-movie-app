import React from 'react';

import {
	useGetNowPlayingMoviesQuery,
	useGetPopularMoviesQuery,
} from '@/app/services/movies';
import { MovieList } from '@/components';

export function Home() {
	const { data: popularMoviesData } = useGetPopularMoviesQuery({ page: 1 });
	const { data: nowPlayingMoviesData } = useGetNowPlayingMoviesQuery({
		page: 1,
	});

	const popularMovies = popularMoviesData?.results ?? [];
	const nowPlayingMovies = nowPlayingMoviesData?.results ?? [];

	return (
		<React.Fragment>
			<div className="space-y-12">
				<section className="now-playing-movies">
					<MovieList
						movies={nowPlayingMovies}
						title="now playing movies"
						href="/movie/now_playing"
					/>
				</section>
				<section className="popular-movies">
					<MovieList
						movies={popularMovies}
						title="popular movies"
						href="/movie/popular"
					/>
				</section>
			</div>
		</React.Fragment>
	);
}
