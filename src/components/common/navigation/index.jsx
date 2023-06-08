import { BsFillHouseDoorFill, BsSearch } from 'react-icons/bs';
import { MdMovieCreation } from 'react-icons/md';

import NavItem from './nav-item';

export function Navigation() {
	return (
		<nav className="sticky top-0 z-50 flex items-center justify-between lg:justify-center bg-slate-900 mb-6 md:m-6 md:rounded-[10px] text-white">
			<NavItem label="home" to="/">
				<BsFillHouseDoorFill className="text-3xl" />
			</NavItem>
			<NavItem label="movies" to="/movie/genre">
				<MdMovieCreation className="text-3xl" />
			</NavItem>
			<NavItem label="search" to="/movie/search">
				<BsSearch className="text-3xl" />
			</NavItem>
		</nav>
	);
}
