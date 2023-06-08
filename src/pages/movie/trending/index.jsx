import React from 'react';

import { useGetTrendingMoviesQuery } from '@/app/services/movies';
import { MovieList, Spinner } from '@/components';

export function MovieTrending() {
	const [page, setPage] = React.useState(1);
	const { data, isFetching } = useGetTrendingMoviesQuery({ page });

	const trendingMovies = data?.results ?? [];

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
