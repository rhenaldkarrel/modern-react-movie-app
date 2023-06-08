import React from 'react';

import { supabaseClient } from '@/utils/constants/supabase';
import { Spinner } from '@/components';

export const AuthContext = React.createContext({
	session: null,
	user: null,
	signOut: () => {},
});

export const AuthProvider = ({ children }) => {
	const [user, setUser] = React.useState();
	const [session, setSession] = React.useState();
	const [loading, setLoading] = React.useState(true);

	React.useEffect(() => {
		const setData = async () => {
			const {
				data: { session },
				error,
			} = await supabaseClient.auth.getSession();
			if (error) throw error;
			setSession(session);
			setUser(session?.user);
			setLoading(false);
		};

		const { data: listener } = supabaseClient.auth.onAuthStateChange(
			(_event, session) => {
				setSession(session);
				setUser(session?.user);
				setLoading(false);
			}
		);

		setData();

		return () => {
			listener?.subscription.unsubscribe();
		};
	}, []);

	const value = React.useMemo(
		() => ({
			session,
			user,
			signOut: async () => {
				setLoading(true);
				await supabaseClient.auth.signOut();
				location.reload();
				setLoading(false);
			},
		}),
		[session, user]
	);

	return (
		<AuthContext.Provider value={value}>
			{!loading ? (
				children
			) : (
				<div className="h-screen w-full flex items-center justify-center">
					<Spinner />
				</div>
			)}
		</AuthContext.Provider>
	);
};
