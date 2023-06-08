import { Link, createSearchParams } from 'react-router-dom';

import { useGetMovieGenresQuery } from '@/app/services/genres';

export function MovieGenres() {
	const { data } = useGetMovieGenresQuery();

	const genres = data?.genres ?? [];

	return (
		<section className="mb-10 flex flex-wrap justify-between">
			{genres.map((genre) => (
				<Link
					to={{
						pathname: `/movie/genre/${genre.id}`,
						search: `${createSearchParams({ name: genre.name })}`,
					}}
					key={genre.id}
					className="m-2 flex h-44 w-44 grow items-center justify-center rounded-lg p-8 text-center text-xl font-medium even:bg-slate-700 odd:bg-indigo-600 hover:opacity-70 transition-all"
				>
					{genre.name}
				</Link>
			))}
		</section>
	);
}
