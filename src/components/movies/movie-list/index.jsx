import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import { MovieCard, TrendingMovieCard } from '../movie-card';
import { sliceMovies } from '@/utils/helpers';
import { SectionHeader } from '@/components';

function BaseMovieList({ movies, title, href, limit = 10 }) {
	return (
		<React.Fragment>
			<SectionHeader title={title} href={href} />
			<div className="movies grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
				{sliceMovies(movies, limit).map((movie) => (
					<MovieCard movie={movie} key={movie.id} />
				))}
			</div>
		</React.Fragment>
	);
}

function TrendingMovieList({ movies, title, href, limit = 10 }) {
	return (
		<React.Fragment>
			<SectionHeader title={title} href={href} />
			<Swiper
				touchEventsTarget="container"
				className="cursor-grab"
				spaceBetween={30}
				breakpoints={{
					0: {
						slidesPerView: 1,
					},
					400: {
						slidesPerView: 2,
					},
					639: {
						slidesPerView: 3,
					},
					865: {
						slidesPerView: 4,
					},
				}}
			>
				{sliceMovies(movies, limit).map((movie) => (
					<SwiperSlide key={movie.id}>
						<TrendingMovieCard movie={movie} />
					</SwiperSlide>
				))}
			</Swiper>
		</React.Fragment>
	);
}

export function MovieList({ isTrending = false, ...rest }) {
	return isTrending ? (
		<TrendingMovieList {...rest} />
	) : (
		<BaseMovieList {...rest} />
	);
}
