import { MovieList, PrimaryAnchorButton } from '@/components';
import { useFavorites } from '@/hooks';

export function MovieFavorite() {
	const { favorites } = useFavorites();

	return (
		<section className="favorite-movies">
			<MovieList movies={favorites} title="my favorite movies" limit={0} />
			{favorites.length === 0 && (
				<div className="flex justify-center flex-col items-center space-y-8">
					<header className="flex justify-center flex-col items-center">
						<span className="text-9xl mb-4">🤔</span>
						<h3>You have no favorited movies.</h3>
					</header>
					<PrimaryAnchorButton href="/movie/search">
						Let&apos;s find one!
					</PrimaryAnchorButton>
				</div>
			)}
		</section>
	);
}
