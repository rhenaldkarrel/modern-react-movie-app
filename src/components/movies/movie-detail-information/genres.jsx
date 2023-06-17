import { Badge } from '@/components';

import React from 'react';
import { Link, createSearchParams } from 'react-router-dom';

export function MovieGenres({ movie }) {
	return (
		<React.Fragment>
			<h3 className="mb-2">Genres</h3>
			<div className="flex gap-2 flex-wrap">
				{movie.genres.map((genre) => (
					<Link
						key={genre.id}
						to={{
							pathname: `/movie/genre/${genre.id}`,
							search: `${createSearchParams({ name: genre.name })}`,
						}}
						className="transition-opacity hover:opacity-80"
					>
						<Badge>{genre.name}</Badge>
					</Link>
				))}
			</div>
		</React.Fragment>
	);
}
