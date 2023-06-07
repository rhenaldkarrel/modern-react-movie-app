import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

const NavItem = ({ children, to, label }) => {
	return (
		<NavLink
			to={to}
			className={({ isActive }) =>
				clsx(
					'flex items-center gap-2 transition-all rounded-lg hover:bg-gray-50 hover:text-black p-3 lg:py-7',
					{ 'text-indigo-600': isActive }
				)
			}
		>
			{children}
			<span className="hidden sm:block lg:hidden capitalize">{label}</span>
		</NavLink>
	);
};

export default NavItem;
