import clsx from 'clsx';

function Skeleton() {
	return (
		<div className="w-44 h-44 grow bg-slate-700 animate-pulse rounded-lg" />
	);
}

export function GenreSkeleton({ amount = 1, className }) {
	const skeletons = Array.from({ length: amount }, (_, index) => (
		<Skeleton key={index} />
	));

	return (
		<div className={clsx('flex flex-wrap gap-4', className)}>{skeletons}</div>
	);
}
