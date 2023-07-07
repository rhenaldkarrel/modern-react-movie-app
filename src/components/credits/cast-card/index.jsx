import { LazyImage } from '@/components';
import { getTmdbImage } from '@/utils/helpers';

export function CastCard({ cast }) {
	return (
		<div
			className="flex justify-center sm:justify-start gap-4 flex-col w-[100px] lg:w-auto lg:flex-row lg:items-center"
			key={cast.id}
		>
			<LazyImage
				src={getTmdbImage(cast.profile_path)}
				alt={cast.name}
				className="object-cover min-w-[100px] max-w-[100px] rounded-full aspect-square"
			/>
			<div className="text-left lg:w-1/2">
				<h3 className="text-base truncate">{cast.name}</h3>
				<p className="text-slate-500 text-sm truncate">{cast.character}</p>
			</div>
		</div>
	);
}
