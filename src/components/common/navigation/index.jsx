import { BsFillTvFill, BsFillHouseDoorFill } from 'react-icons/bs';
import { MdMovieCreation } from 'react-icons/md';
import NavItem from './NavItem';

export function Navigation() {
	return (
		<nav className="sticky top-0 z-50 flex items-center justify-between bg-slate-900 p-5 md:mx-6 md:mt-6 md:mb-[33px] md:rounded-[10px] lg:fixed lg:left-0 lg:mr-0 lg:h-5/6 lg:flex-col lg:py-9 text-white">
			<NavItem label="home">
				<BsFillHouseDoorFill />
			</NavItem>
			<NavItem label="movies">
				<MdMovieCreation />
			</NavItem>
			<NavItem label="TVs">
				<BsFillTvFill />
			</NavItem>
		</nav>
	);
}
