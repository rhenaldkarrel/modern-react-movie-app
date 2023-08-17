import React from 'react';

import { useGetNowPlayingMoviesQuery } from '@/app/services/movies';
import { MovieList, MovieSkeleton, Spinner, TextSkeleton } from '@/components';
import { useInfiniteScroll } from '@/hooks';

export function MovieNowPlaying() {
	const [page, setPage] = React.useState(1);
	const { data, isFetching, isLoading } = useGetNowPlayingMoviesQuery({ page });

	const nowPlayingMovies = data?.results ?? [];
	const totalPages = data?.total_pages;

	useInfiniteScroll({
		isFetching,
		totalPages,
		page,
		setPage,
	});

	if (isLoading) {
		return (
			<div className="space-y-4">
				<TextSkeleton height={36} width={234} />
				<MovieSkeleton amount={10} />
			</div>
		);
	}

	return (
		<React.Fragment>
			<section className="now-playing-movies">
				<MovieList
					movies={nowPlayingMovies}
					title="all now playing movies"
					limit={0}
				/>
				{isFetching && (
					<div className="w-full flex justify-center py-8">
						<Spinner />
					</div>
				)}
			</section>
		</React.Fragment>
	);
}
