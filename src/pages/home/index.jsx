import React from 'react';

import {
	useGetNowPlayingMoviesQuery,
	useGetPopularMoviesQuery,
	useGetTopRatedMoviesQuery,
	useGetTrendingMoviesQuery,
	useGetUpcomingMoviesQuery,
} from '@/app/services/movies';
import { MovieList } from '@/components';

export function Home() {
	const { data: popularMoviesData } = useGetPopularMoviesQuery({ page: 1 });
	const { data: nowPlayingMoviesData } = useGetNowPlayingMoviesQuery({
		page: 1,
	});
	const { data: topRatedMoviesData } = useGetTopRatedMoviesQuery({
		page: 1,
	});
	const { data: upcomingMoviesData } = useGetUpcomingMoviesQuery({
		page: 1,
	});
	const { data: trendingMoviesData } = useGetTrendingMoviesQuery({
		page: 1,
	});

	const popularMovies = popularMoviesData?.results ?? [];
	const nowPlayingMovies = nowPlayingMoviesData?.results ?? [];
	const topRatedMovies = topRatedMoviesData?.results ?? [];
	const upcomingMovies = upcomingMoviesData?.results ?? [];
	const trendingMovies = trendingMoviesData?.results ?? [];

	return (
		<React.Fragment>
			<div className="space-y-12">
				<section>
					<MovieList
						isTrending
						movies={trendingMovies}
						title="trending movies"
						href="/movie/trending"
					/>
				</section>
				<section className="now-playing-movies">
					<MovieList
						movies={nowPlayingMovies}
						title="now playing movies"
						href="/movie/now_playing"
					/>
				</section>
				<section className="upcoming-movies">
					<MovieList
						movies={upcomingMovies}
						title="upcoming movies"
						href="/movie/upcoming"
					/>
				</section>
				<section className="popular-movies">
					<MovieList
						movies={popularMovies}
						title="popular movies"
						href="/movie/popular"
					/>
				</section>
				<section className="top-rated-movies">
					<MovieList
						movies={topRatedMovies}
						title="top rated movies"
						href="/movie/top_rated"
					/>
				</section>
			</div>
		</React.Fragment>
	);
}
