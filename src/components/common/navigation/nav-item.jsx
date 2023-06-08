import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

const NavItem = ({ children, to, label, className, ...rest }) => {
	return (
		<NavLink
			to={to}
			className={({ isActive }) =>
				clsx(
					'flex items-center gap-2 transition-all rounded-lg hover:bg-gray-50 hover:text-black p-8',
					{ 'text-indigo-600': isActive },
					className
				)
			}
			{...rest}
		>
			{children}
			<span className="hidden sm:block capitalize">{label}</span>
		</NavLink>
	);
};

export default NavItem;
