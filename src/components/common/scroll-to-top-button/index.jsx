import React from 'react';
import clsx from 'clsx';
import { BiArrowFromBottom } from 'react-icons/bi';

export function ScrollToTop() {
	const [isVisible, setIsVisible] = React.useState(false);

	const toggleVisibility = () => {
		if (window.pageYOffset > 300) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	React.useEffect(() => {
		window.addEventListener('scroll', toggleVisibility);

		return () => {
			window.removeEventListener('scroll', toggleVisibility);
		};
	}, []);

	return (
		<div className="fixed bottom-2 right-2 z-10">
			<button
				type="button"
				onClick={scrollToTop}
				className={clsx(
					isVisible ? 'opacity-100' : 'opacity-0',
					'bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 inline-flex items-center rounded-full p-3 shadow-sm transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2'
				)}
			>
				<BiArrowFromBottom className="h-6 w-6" aria-hidden="true" />
			</button>
		</div>
	);
}
