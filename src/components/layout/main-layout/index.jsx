import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { Navigation, SearchMovieForm, Spinner } from '@/components';

function FallbackSpinner() {
	return (
		<div className="h-screen w-full flex items-center justify-center">
			<Spinner />
		</div>
	);
}

export function MainLayout() {
	const { pathname } = useLocation();

	React.useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, [pathname]);

	return (
		<React.Fragment>
			<Navigation />
			<React.Suspense fallback={<FallbackSpinner />}>
				<main className="lg:min-w-[800px] px-6">
					<div className="mb-8">
						<SearchMovieForm />
					</div>
					<Outlet />
				</main>
			</React.Suspense>
		</React.Fragment>
	);
}
