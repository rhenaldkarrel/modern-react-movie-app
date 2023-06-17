import React from 'react';

import { CastCard, SectionHeader } from '@/components';
import { sliceMovies } from '@/utils/helpers';

export function CastList({ casts, title, href, limit = 9 }) {
	return (
		<React.Fragment>
			<SectionHeader title={title} href={href} />
			<div className="movies overflow-auto flex lg:grid gap-5 lg:grid-cols-3">
				{sliceMovies(casts, limit).map((cast) => (
					<CastCard cast={cast} key={cast.id} />
				))}
			</div>
		</React.Fragment>
	);
}
