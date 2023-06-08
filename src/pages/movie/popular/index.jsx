import React from 'react';

import { useGetPopularMoviesQuery } from '@/app/services/movies';
import { MovieList, Spinner } from '@/components';
import { useInfiniteScroll } from '@/hooks';

export function MoviePopular() {
	const [page, setPage] = React.useState(1);
	const { data, isFetching } = useGetPopularMoviesQuery({ page });

	const popularMovies = data?.results ?? [];
	const totalPages = data?.total_pages;

	useInfiniteScroll({
		isFetching,
		totalPages,
		page,
		setPage,
	});

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
