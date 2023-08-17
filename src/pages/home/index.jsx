import React from 'react';

import {
	useGetNowPlayingMoviesQuery,
	useGetPopularMoviesQuery,
	useGetTopRatedMoviesQuery,
	useGetTrendingMoviesQuery,
	useGetUpcomingMoviesQuery,
} from '@/app/services/movies';
import {
	MovieList,
	MovieSkeleton,
	TextSkeleton,
	TrendingMovieSkeleton,
} from '@/components';

export function Home() {
	const { data: popularMoviesData, isFetching: isPopularMoviesFetching } =
		useGetPopularMoviesQuery({ page: 1 });
	const { data: nowPlayingMoviesData, isFetching: isNowPlayingMoviesFetching } =
		useGetNowPlayingMoviesQuery({
			page: 1,
		});
	const { data: topRatedMoviesData, isFetching: isTopRatedMoviesFetching } =
		useGetTopRatedMoviesQuery({ page: 1 });
	const { data: upcomingMoviesData, isFetching: isUpcomingMoviesFetching } =
		useGetUpcomingMoviesQuery({ page: 1 });
	const { data: trendingMoviesData, isFetching: isTrendingMoviesFetching } =
		useGetTrendingMoviesQuery({ page: 1 });

	const isLoading =
		isPopularMoviesFetching ||
		isNowPlayingMoviesFetching ||
		isTopRatedMoviesFetching ||
		isUpcomingMoviesFetching ||
		isTrendingMoviesFetching;

	if (isLoading) {
		return (
			<div className="space-y-12">
				<div className="space-y-4">
					<TextSkeleton height={36} width={234} />
					<TrendingMovieSkeleton amount={4} />
				</div>
				<div className="space-y-4">
					<TextSkeleton height={36} width={234} />
					<MovieSkeleton amount={10} />
				</div>
			</div>
		);
	}

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
