import React from 'react';

export function MovieOverview({ movie }) {
	return (
		<React.Fragment>
			<h3 className="mb-2">Overview</h3>
			<p>{movie.overview}</p>
		</React.Fragment>
	);
}
