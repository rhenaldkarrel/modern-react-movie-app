import { FaExternalLinkAlt, FaImdb } from 'react-icons/fa';

import { PrimaryAnchorButton } from '@/components/common/buttons';

export function MovieLinks({ movie }) {
	return (
		<div className="flex flex-wrap">
			{movie.homepage === '' || movie.homepage === undefined ? null : (
				<PrimaryAnchorButton
					isRouter={false}
					href={movie.homepage}
					target="_blank"
					rel="noreferrer"
				>
					<FaExternalLinkAlt />
					<p>Website</p>
				</PrimaryAnchorButton>
			)}
			{!movie.imdb_id ? null : (
				<PrimaryAnchorButton
					isRouter={false}
					href={`https://www.imdb.com/title/${movie.imdb_id}`}
					target="_blank"
					rel="noreferrer"
				>
					<FaImdb />
					<p>IMDB</p>
				</PrimaryAnchorButton>
			)}
		</div>
	);
}
