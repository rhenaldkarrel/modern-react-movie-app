import React from 'react';
import { TMDB_IMAGE_BASE_URL } from '../constants/tmdb';

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

export function lazyImport(factory, name) {
	return Object.create({
		[name]: React.lazy(() =>
			factory().then((module) => ({ default: module[name] }))
		),
	});
}

export function getMoviePoster(src) {
	if (src) {
		return TMDB_IMAGE_BASE_URL + src;
	}

	return '/img-placeholder.jpg';
}

export function getMovieLength(runtime) {
	if (runtime !== 0 && runtime !== undefined) {
		return runtime + ' min.';
	} else {
		return 'N/A';
	}
}

export function numberWithCommas(num) {
	return num ? num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0;
}

export function getURL() {
	let url =
		import.meta.env.VITE_SITE_URL ??
		import.meta.env.VITE_VERCEL_URL ??
		'http://localhost:5173/';
	url = url.includes('http') ? url : `https://${url}`;
	url = url.endsWith('/') ? url : `${url}/`;
	return url;
}
