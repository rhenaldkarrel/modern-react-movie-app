import React from 'react';

import { GeneralInformationItem } from './general-information-item';
import { getMovieLength, getYear } from '@/utils/helpers';

export function MovieGeneralInformation({ movie }) {
	return (
		<React.Fragment>
			<h3 className="sr-only">General Information</h3>
			<div className="mb-6 flex items-center justify-between sm:justify-center sm:gap-12 lg:gap-0 lg:justify-between text-left text-sm lg:w-10/12 lg:text-lg">
				<GeneralInformationItem
					title="length"
					information={getMovieLength(movie.runtime)}
				/>
				<GeneralInformationItem
					title="language"
					information={movie.original_language.toUpperCase()}
				/>
				<GeneralInformationItem
					title="year"
					information={getYear(movie.release_date)}
				/>
				<GeneralInformationItem title="status" information={movie.status} />
			</div>
		</React.Fragment>
	);
}
