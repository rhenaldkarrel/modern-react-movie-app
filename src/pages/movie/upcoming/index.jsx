import React from 'react';

import { useGetUpcomingMoviesQuery } from '@/app/services/movies';
import { MovieList, Spinner } from '@/components';
import { useInfiniteScroll } from '@/hooks';

export function MovieUpcoming() {
	const [page, setPage] = React.useState(1);
	const { data, isFetching } = useGetUpcomingMoviesQuery({ page });

	const upcomingMovies = data?.results ?? [];
	const totalPages = data?.total_pages;

	useInfiniteScroll({
		isFetching,
		totalPages,
		page,
		setPage,
	});

	return (
		<React.Fragment>
			<section className="upcoming-movies">
				<MovieList
					movies={upcomingMovies}
					title="all upcoming movies"
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
