export const TMDB_API_KEY = import.meta.env.VITE_APP_TMDB_API_KEY;
export const TMDB_ACCESS_TOKEN = import.meta.env.VITE_APP_TMDB_ACCESS_TOKEN;
export const TMDB_API_BASE_URL = 'https://api.themoviedb.org/3/';

/**
 * See https://developer.themoviedb.org/reference/configuration-details.
 * Right now, because of the maximum width of the image used within the app is about 300-500 only,
 * then we can set it to `w300` directly for all images
 */
export const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w300';
