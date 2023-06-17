import { Link } from 'react-router-dom';

export function SectionHeader({ title, href }) {
	return (
		<header className="mb-4 flex items-end justify-between sm:mb-6">
			<h2 className="capitalize">{title}</h2>
			{href && (
				<Link
					to={href}
					className="hover:underline text-slate-600 uppercase font-medium text-xs"
				>
					see more
				</Link>
			)}
		</header>
	);
}
