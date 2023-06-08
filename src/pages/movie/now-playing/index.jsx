import React from 'react';

import { useGetNowPlayingMoviesQuery } from '@/app/services/movies';
import { MovieList, Spinner } from '@/components';
import { useInfiniteScroll } from '@/hooks';

export function MovieNowPlaying() {
	const [page, setPage] = React.useState(1);
	const { data, isFetching } = useGetNowPlayingMoviesQuery({ page });

	const nowPlayingMovies = data?.results ?? [];
	const totalPages = data?.total_pages;

	useInfiniteScroll({
		isFetching,
		totalPages,
		page,
		setPage,
	});

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
