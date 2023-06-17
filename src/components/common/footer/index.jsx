export function Footer() {
	return (
		<footer className="flex justify-center items-center italic transition hover:opacity-50">
			<a
				href="https://github.com/rhenaldkarrel"
				target="_blank"
				rel="noopener noreferrer"
				className="py-8"
			>
				&copy; {new Date().getFullYear()} Designed & Built by Rhenald Karrel
			</a>
		</footer>
	);
}
