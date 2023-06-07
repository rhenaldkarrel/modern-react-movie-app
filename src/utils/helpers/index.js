export function getYear(date) {
	if (!date) {
		return 'N/A';
	} else {
		return date.substring(0, 4);
	}
}

export function sliceMovies(movies, limit) {
	if (limit === 0) {
		return movies;
	}

	return movies.slice(0, limit);
}
