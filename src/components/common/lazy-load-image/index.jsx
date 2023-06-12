import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export function LazyImage({ className, src, ...rest }) {
	return (
		<LazyLoadImage className={className} effect="blur" src={src} {...rest} />
	);
}
