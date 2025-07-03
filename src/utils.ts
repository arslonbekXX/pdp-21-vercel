import type { Movie } from './types';

export function paginate(items: Movie[], pageSize: number, currentPage: number) {
	let startIdx = (currentPage - 1) * pageSize;
	let endIdx = startIdx + pageSize;

	return items.slice(startIdx, endIdx);
}
