export function GeneralInformationItem({ title, information }) {
	return (
		<div>
			<p className="mb-1 text-xs sm:text-base text-slate-500 capitalize">
				{title}
			</p>
			<p className="font-bold sm:text-lg xl:text-2xl">{information}</p>
		</div>
	);
}
