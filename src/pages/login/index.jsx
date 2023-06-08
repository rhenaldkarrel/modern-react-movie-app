import { Navigate } from 'react-router-dom';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';

import { supabaseClient } from '@/utils/constants/supabase';
import { useAuth } from '@/hooks';
import { getURL } from '@/utils/helpers';

export function Login() {
	const { user } = useAuth();

	if (user) {
		return <Navigate to="/" />;
	}

	return (
		<div className="max-w-md mx-auto bg-slate-700 p-12 rounded-lg text-white">
			<Auth
				supabaseClient={supabaseClient}
				appearance={{ theme: ThemeSupa }}
				providers={['google']}
				redirectTo={getURL()}
			/>
		</div>
	);
}
