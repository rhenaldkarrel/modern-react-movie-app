import React from 'react';
import { useSearchParams, useParams } from 'react-router-dom';

import { useGetMoviesByGenreQuery } from '@/app/services/movies';
import { MovieList, MovieSkeleton, Spinner, TextSkeleton } from '@/components';
import { useInfiniteScroll } from '@/hooks';

export function GenreMovieList() {
	const { id } = useParams();
	const [searchParams] = useSearchParams();
	const genreName = searchParams.get('name');

	const [page, setPage] = React.useState(1);

	const { data, isFetching, isLoading } = useGetMoviesByGenreQuery({
		with_genres: id,
		page,
	});

	const movies = data?.results ?? [];
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
				<MovieList movies={movies} title={genreName} limit={0} />
				{isFetching && (
					<div className="w-full flex justify-center py-8">
						<Spinner />
					</div>
				)}
			</section>
		</React.Fragment>
	);
}
