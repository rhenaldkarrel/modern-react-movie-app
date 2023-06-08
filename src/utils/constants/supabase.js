import { createClient } from '@supabase/supabase-js';

const SUPABASE_API_KEY = import.meta.env.VITE_APP_SUPABASE_ANON_KEY;
const SUPABASE_PROJECT_URL = import.meta.env.VITE_APP_SUPABASE_PROJECT_URL;

export const supabaseClient = createClient(
	SUPABASE_PROJECT_URL,
	SUPABASE_API_KEY
);
