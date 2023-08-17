import React from 'react';

import { useGetPopularMoviesQuery } from '@/app/services/movies';
import { MovieList, MovieSkeleton, Spinner, TextSkeleton } from '@/components';
import { useInfiniteScroll } from '@/hooks';

export function MoviePopular() {
	const [page, setPage] = React.useState(1);
	const { data, isFetching, isLoading } = useGetPopularMoviesQuery({ page });

	const popularMovies = data?.results ?? [];
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
			<section className="popular-movies">
				<MovieList
					movies={popularMovies}
					title="all popular movies"
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
