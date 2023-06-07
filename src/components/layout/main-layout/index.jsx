import React from 'react';
import { Outlet } from 'react-router-dom';

import { Navigation, Spinner } from '@/components';

export function MainLayout() {
	return (
		<React.Fragment>
			<Navigation />
			<main className="mx-0 flex flex-col py-6 px-4 md:m-6 md:px-0 md:pt-0 lg:ml-32 lg:min-w-[800px] lg:grow">
				<React.Suspense
					fallback={
						<div className="h-screen w-full flex items-center justify-center">
							<Spinner />
						</div>
					}
				>
					<Outlet />
				</React.Suspense>
			</main>
		</React.Fragment>
	);
}
