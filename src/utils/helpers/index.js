export function getYear(date) {
	if (!date) {
		return 'N/A';
	} else {
		return date.substring(0, 4);
	}
}
