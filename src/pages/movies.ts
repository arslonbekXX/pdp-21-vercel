import { movies } from '../db';
import type { Movie } from '../types';

export const moviesInit = () => {
	const tableBody = document.querySelector('tbody') as HTMLTableSectionElement;
	for (let movie of movies) {
		console.log(movie);
		const row = ` <tr>
         <td><a href="">The Notebook</a></td>
         <td>Action</td>
         <td>10</td>
         <td>$20</td>
         <td>🩶</td>
        </tr>`;
	}
};

function paginate(items: Movie[], pageSize: number, currentPage: number) {
	let startIdx = (currentPage - 1) * pageSize;
	let endIdx = startIdx + pageSize;

	return items.slice(startIdx, endIdx);
}
