export function PrimaryOutlinedButton({ children, ...rest }) {
	return (
		<button
			className="mb-4 mr-4 flex gap-4 cursor-pointer items-center rounded-md border border-indigo-600 transition-all py-3 px-8 text-sm font-medium hover:bg-indigo-600 hover:text-white"
			{...rest}
		>
			{children}
		</button>
	);
}
