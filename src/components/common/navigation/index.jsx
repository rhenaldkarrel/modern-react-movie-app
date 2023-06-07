import { BsFillTvFill, BsFillHouseDoorFill } from 'react-icons/bs';
import { MdMovieCreation } from 'react-icons/md';
import NavItem from './NavItem';

export function Navigation() {
	return (
		<nav className="sticky top-0 z-50 flex items-center justify-between lg:justify-start bg-slate-900 md:mx-6 md:mt-6 md:mb-[33px] md:rounded-[10px] lg:fixed lg:left-0 lg:mr-0 lg:flex-col text-white p-2">
			<NavItem label="home">
				<BsFillHouseDoorFill className="text-3xl" />
			</NavItem>
			<NavItem label="movies">
				<MdMovieCreation className="text-3xl" />
			</NavItem>
			<NavItem label="TVs">
				<BsFillTvFill className="text-3xl" />
			</NavItem>
		</nav>
	);
}
