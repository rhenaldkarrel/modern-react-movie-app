import React from 'react';
import { useGetMoviesByQueryQuery } from '@/app/services/movies';
import { useSearchParams } from 'react-router-dom';
import { MovieList, Spinner } from '@/components';
import { useInfiniteScroll } from '@/hooks';

export function MovieSearch() {
	const [searchParams] = useSearchParams();
	const query = searchParams.get('query');

	const [page, setPage] = React.useState(1);

	const { data, isFetching } = useGetMoviesByQueryQuery({
		page,
		query,
	});

	const searchedMovies = data?.results ?? [];
	const totalPages = data?.total_pages;

	useInfiniteScroll({
		isFetching,
		totalPages,
		page,
		setPage,
	});

	return (
		<React.Fragment>
			<section className="search-movies">
				<MovieList movies={searchedMovies} title="discover movies" limit={0} />
				{isFetching && (
					<div className="w-full flex justify-center py-8">
						<Spinner />
					</div>
				)}
			</section>
		</React.Fragment>
	);
}
