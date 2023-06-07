import { Link } from 'react-router-dom';

const NavItem = ({ children, to, label }) => {
	return (
		<Link to={to} className="flex items-center gap-2">
			{children}
			<span className="hidden sm:block lg:hidden capitalize">{label}</span>
		</Link>
	);
};

export default NavItem;
