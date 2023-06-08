import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

import { useOutsideClick, useAuth } from '@/hooks';

export function AvatarDropdown({ openProfileMenu, setOpenProfileMenu }) {
	const { user, signOut } = useAuth();

	const dropdownRef = React.useRef(null);

	useOutsideClick(dropdownRef, () => {
		setOpenProfileMenu(false);
	});

	return (
		<div className="relative" ref={dropdownRef}>
			<img
				type="button"
				className="w-10 h-10 rounded-full cursor-pointer"
				src={user.user_metadata.avatar_url ?? '/avatar-placeholder.png'}
				alt="User dropdown"
				onClick={() => setOpenProfileMenu(!openProfileMenu)}
			/>
			<div
				className={clsx(
					'z-10 divide-y absolute right-0 mt-1 rounded-lg shadow w-44 bg-gray-700 divide-gray-600',
					openProfileMenu ? 'block' : 'hidden'
				)}
			>
				<div className="px-4 py-3 text-sm">
					<div>{user.user_metadata.full_name}</div>
					<div className="font-medium truncate">{user.email}</div>
				</div>
				<ul className="py-2 text-sm" aria-labelledby="avatarButton">
					<li>
						<Link
							to="#"
							className="block px-4 py-2 hover:bg-gray-800 transition-all"
						>
							Favorite
						</Link>
					</li>
					<li>
						<Link
							to="#"
							onClick={signOut}
							className="block px-4 py-2 hover:bg-gray-800 transition-all"
						>
							Logout
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}