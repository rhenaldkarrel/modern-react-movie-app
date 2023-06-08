import React from 'react';
import { useGetMoviesByQueryQuery } from '@/app/services/movies';
import { useSearchParams } from 'react-router-dom';
import { MovieList, Spinner } from '@/components';

export function MovieSearch() {
	const [searchParams] = useSearchParams();
	const query = searchParams.get('query');

	const [page, setPage] = React.useState(1);

	const { data, isFetching } = useGetMoviesByQueryQuery({
		page,
		query,
	});

	const searchedMovies = data?.results ?? [];

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
			<section className="search-movies">
				<MovieList movies={searchedMovies} title="search results" limit={0} />
				{isFetching && (
					<div className="w-full flex justify-center py-8">
						<Spinner />
					</div>
				)}
			</section>
		</React.Fragment>
	);
}
