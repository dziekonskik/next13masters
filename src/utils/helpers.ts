export function isParsableToNumber(str: string) {
	return !isNaN(parseFloat(str));
}

export function slugify(input: string): string {
	return input
		.trim() // Trim whitespace from the beginning and end
		.toLowerCase() // Convert to lowercase
		.replace(/[^a-z0-9\- ]/g, "") // Remove any character that is not a-z, 0-9, hyphen, or space
		.replace(/\s+/g, "-") // Replace spaces with hyphens
		.replace(/-+/g, "-"); // Replace multiple hyphens with a single one
}
