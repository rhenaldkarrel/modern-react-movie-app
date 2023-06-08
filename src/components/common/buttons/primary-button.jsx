import clsx from 'clsx';

export function PrimaryButton({ className, children, ...rest }) {
	return (
		<button
			className={clsx(
				'mb-4 mr-4 flex gap-4 cursor-pointer items-center justify-center rounded-md bg-indigo-600 transition-all py-3 px-8 text-sm font-medium hover:bg-indigo-700',
				className
			)}
			{...rest}
		>
			{children}
		</button>
	);
}
