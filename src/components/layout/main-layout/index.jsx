import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import {
	Navigation,
	ScrollToTop,
	SearchMovieForm,
	Spinner,
} from '@/components';
import { useAuth } from '@/hooks';

function FallbackSpinner() {
	return (
		<div className="h-screen w-full flex items-center justify-center">
			<Spinner />
		</div>
	);
}

export function MainLayout() {
	const { pathname } = useLocation();
	const { user } = useAuth();

	React.useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, [pathname]);

	return (
		<React.Fragment>
			<Navigation />
			<ScrollToTop />
			<React.Suspense fallback={<FallbackSpinner />}>
				<main className="lg:min-w-[800px] px-6">
					{user && (
						<h1 className="mb-6">
							Welcome back,{' '}
							<span className="text-indigo-600">
								{user.user_metadata.full_name ?? user.email}
							</span>
							!
						</h1>
					)}
					<div className="mb-8">
						<SearchMovieForm />
					</div>
					<Outlet />
				</main>
			</React.Suspense>
		</React.Fragment>
	);
}
