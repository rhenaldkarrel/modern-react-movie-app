import clsx from 'clsx';

function Skeleton() {
	return (
		<div className="w-full h-[396px] bg-slate-700 animate-pulse rounded-lg" />
	);
}

export function MovieSkeleton({ amount = 1, className }) {
	const skeletons = Array.from({ length: amount }, (_, index) => (
		<Skeleton key={index} />
	));

	return (
		<div
			className={clsx(
				'grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5',
				className
			)}
		>
			{skeletons}
		</div>
	);
}
