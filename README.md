# Web Image Gallery

## Tech Stacks

- React
- React Router DOM
- Redux Toolkit Query
- Redux Persist
- Eslint, Prettier, Lint Staged, Husky
- Swiper
- Supabase (for authentication)
- Tailwindcss & Postcss
- clsx

## Features Highlight

- Redux Toolkit Query services
  - Get popular movies
  - Get now playing movies
  - Get upcoming movies
  - Get top rated movies
  - Get trending movies
  - Get movies by genre (filter movie by genre)
  - Search movies
  - Get movie detail
- Infinite scroll
- Add to favorite movies using Redux Persist
- Authentication
  - Login
  - Register
  - Login with Google
- Reusable custom hooks
- Auth provider context
- Structured folder
- Responsive design
- React Router layouting
- Scalable and maintainable
- Automatic linting that can maintain code style with Eslint, Prettier, Husky, and Lint Staged.

## How to Install

1. Setup Supabase auth.
    - Create account/login.
    - Create new app to get the **project URL** and **anon key**.
    - Enable Google provider (requires **client ID** and **client secret** from Google Cloud)
2. Setup TMDB account.
    - Get **API key/access token**.
3. See `.env.example` and create your `.env` file. Fill it with the correct values.
4. Run `pnpm install`
5. Run `pnpm dev`

## Screenshots

| ![Home Page](./screenshots/landing.png) |
| :-------------------------------------: |
|               _Home Page_               |

| ![Movie Detail Page](./screenshots/movie-detail.png) |
| :--------------------------------------------------: |
|                 _Movie Detail Page_                  |

| ![Search Movie by Genre Page](./screenshots/search-movie-by-genre.png) |
| :--------------------------------------------------------------------: |
|                      _Search Movie by Genre Page_                      |

| ![Search Page](./screenshots/search.png) |
| :--------------------------------------: |
|           _Search Movie Page_            |

| ![Login Page](./screenshots/login.png) |
| :------------------------------------: |
|              _Login Page_              |

| ![Example Login Page](./screenshots/example-login.png) |
| :----------------------------------------------------: |
|                  _Example Login Page_                  |

## License

Licensed under [MIT License, Copyright (c) 2023 Rhenald Karrel](./LICENSE).
