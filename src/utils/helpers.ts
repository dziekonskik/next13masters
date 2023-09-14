export function isParsableToNumber(str: string) {
	return !isNaN(parseFloat(str));
}
