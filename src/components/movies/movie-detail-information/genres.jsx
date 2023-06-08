import { Badge } from '@/components';

import React from 'react';

export function MovieGenres({ movie }) {
	return (
		<React.Fragment>
			<h3 className="mb-2">Genres</h3>
			<div className="flex gap-2 flex-wrap">
				{movie.genres.map((genre) => (
					<Badge key={genre.id}>{genre.name}</Badge>
				))}
			</div>
		</React.Fragment>
	);
}
