import React from 'react';

import { useGetTopRatedMoviesQuery } from '@/app/services/movies';
import { MovieList, Spinner } from '@/components';
import { useInfiniteScroll } from '@/hooks';

export function MovieTopRated() {
	const [page, setPage] = React.useState(1);
	const { data, isFetching } = useGetTopRatedMoviesQuery({ page });

	const topRatedMovies = data?.results ?? [];
	const totalPages = data?.total_pages;

	useInfiniteScroll({
		isFetching,
		totalPages,
		page,
		setPage,
	});

	return (
		<React.Fragment>
			<section className="top-rated-movies">
				<MovieList
					movies={topRatedMovies}
					title="all top rated movies"
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
