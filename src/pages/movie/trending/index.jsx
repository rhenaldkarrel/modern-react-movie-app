import React from 'react';

import { useGetTrendingMoviesQuery } from '@/app/services/movies';
import { MovieList, MovieSkeleton, Spinner, TextSkeleton } from '@/components';
import { useInfiniteScroll } from '@/hooks';

export function MovieTrending() {
	const [page, setPage] = React.useState(1);
	const { data, isFetching, isLoading } = useGetTrendingMoviesQuery({ page });

	const trendingMovies = data?.results ?? [];
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
