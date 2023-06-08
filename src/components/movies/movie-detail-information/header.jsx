export function MovieHeader({ movie }) {
	return (
		<header className="movie-header text-center lg:text-left">
			<h1 className="mb-2">{movie.original_title}</h1>
			<h2 className="text-slate-500 md:text-2xl font-normal">
				{movie.tagline}
			</h2>
		</header>
	);
}
