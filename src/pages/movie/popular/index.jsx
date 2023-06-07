import React from 'react';

import { useGetPopularMoviesQuery } from '@/app/services/movies';
import { MovieList, Spinner } from '@/components';

export function MoviePopular() {
	const [page, setPage] = React.useState(1);
	const { data, isFetching } = useGetPopularMoviesQuery({ page });

	const popularMovies = data?.results ?? [];

	React.useEffect(() => {
		const onScroll = () => {
			const scrolledToBottom =
				window.innerHeight + window.scrollY >= document.body.offsetHeight;
			if (scrolledToBottom && !isFetching) {
				setPage(page + 1);
			}
		};

		document.addEventListener('scroll', onScroll);

		return function () {
			document.removeEventListener('scroll', onScroll);
		};
	}, [page, isFetching]);

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
