import React from 'react';

import { useGetTopRatedMoviesQuery } from '@/app/services/movies';
import { MovieList, Spinner } from '@/components';

export function MovieTopRated() {
	const [page, setPage] = React.useState(1);
	const { data, isFetching } = useGetTopRatedMoviesQuery({ page });

	const topRatedMovies = data?.results ?? [];

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
