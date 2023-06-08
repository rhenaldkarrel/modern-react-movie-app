import React from 'react';

export function useInfiniteScroll({ totalPages, page, setPage, isFetching }) {
	React.useEffect(() => {
		const onScroll = () => {
			if (totalPages === page) return;

			const scrolledToBottom =
				window.innerHeight + window.scrollY >= document.body.offsetHeight;
			if (scrolledToBottom && !isFetching) {
				setPage((prevPage) => prevPage + 1);
			}
		};

		document.addEventListener('scroll', onScroll);

		return function () {
			document.removeEventListener('scroll', onScroll);
		};
	}, [totalPages, isFetching, setPage, page]);
}
