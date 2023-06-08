import React from 'react';

import { BsFillHouseDoorFill, BsSearch } from 'react-icons/bs';
import { BiLogIn } from 'react-icons/bi';
import { MdMovieCreation } from 'react-icons/md';

import NavItem from './nav-item';
import { useAuth } from '@/hooks';
import { AvatarDropdown } from './avatar-dropdown';

export function Navigation() {
	const [openProfileMenu, setOpenProfileMenu] = React.useState(false);

	const { user } = useAuth();

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
			{!user ? (
				<NavItem label="login" to="/login">
					<BiLogIn className="text-3xl" />
				</NavItem>
			) : (
				<AvatarDropdown
					openProfileMenu={openProfileMenu}
					setOpenProfileMenu={setOpenProfileMenu}
				/>
			)}
		</nav>
	);
}
