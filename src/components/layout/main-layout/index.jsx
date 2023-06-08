import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { Navigation, Spinner } from '@/components';

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
				<main className="lg:min-w-[800px] lg:ml-32 mx-6 mt-6 md:mt-0 lg:mx-0 lg:py-6 lg:pr-6">
					<Outlet />
				</main>
			</React.Suspense>
		</React.Fragment>
	);
}
