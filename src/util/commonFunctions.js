export function truncateText(text, maxLength = 25) {
	if (typeof text !== "string") return "";
	return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
}
