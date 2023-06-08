import React from 'react';

import { AuthContext } from '@/context';

export const useAuth = () => {
	return React.useContext(AuthContext);
};
