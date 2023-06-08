export function SearchMovieForm() {
	return (
		<form>
			<label
				htmlFor="search-movies"
				className="mb-2 text-sm font-medium sr-only"
			>
				Search
			</label>
			<div className="relative">
				<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
					<svg
						aria-hidden="true"
						className="w-5 h-5 text-gray-400"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						></path>
					</svg>
				</div>
				<input
					type="text"
					id="search-movies"
					className="block w-full p-4 pl-10 text-sm rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
					placeholder="Search Movies..."
					required
				/>
				<button
					type="submit"
					className="absolute right-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
				>
					Search
				</button>
			</div>
		</form>
	);
}
