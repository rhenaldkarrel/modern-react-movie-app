import { Link } from 'react-router-dom';

function AnchorButton({ href, children, ...rest }) {
	return (
		<a
			href={href}
			className="mb-4 mr-4 flex gap-4 cursor-pointer items-center rounded-md border-none bg-indigo-600 transition-all py-3 px-8 text-sm font-medium hover:bg-white hover:text-black"
			{...rest}
		>
			{children}
		</a>
	);
}

function RouterButton({ href, children }) {
	return (
		<Link
			to={href}
			className="mb-4 mr-4 flex gap-4 cursor-pointer items-center rounded-md border-none bg-indigo-600 transition-all py-3 px-8 text-sm font-medium hover:bg-white hover:text-black"
		>
			{children}
		</Link>
	);
}

export function PrimaryAnchorButton({ isRouter = true, ...rest }) {
	return isRouter ? <RouterButton {...rest} /> : <AnchorButton {...rest} />;
}
