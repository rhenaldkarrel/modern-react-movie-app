import React from 'react';

import { useGetTrendingMoviesQuery } from '@/app/services/movies';
import { MovieList, Spinner } from '@/components';
import { useInfiniteScroll } from '@/hooks';

export function MovieTrending() {
	const [page, setPage] = React.useState(1);
	const { data, isFetching } = useGetTrendingMoviesQuery({ page });

	const trendingMovies = data?.results ?? [];
	const totalPages = data?.total_pages;

	useInfiniteScroll({
		isFetching,
		totalPages,
		page,
		setPage,
	});

	return (
		<React.Fragment>
			<section className="trending-movies">
				<MovieList
					movies={trendingMovies}
					title="all trending movies"
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
