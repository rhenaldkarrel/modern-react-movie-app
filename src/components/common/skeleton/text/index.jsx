import clsx from 'clsx';

export function TextSkeleton({ height = 16, width = 50, className }) {
	return (
		<div
			className={clsx('bg-slate-700 animate-pulse rounded-md', className)}
			style={{ height, width }}
		/>
	);
}
