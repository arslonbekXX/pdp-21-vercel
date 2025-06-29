import { movies } from '../db';
import type { Movie } from '../types';

const state = {
	genre: 'All',
	currentPage: 0,
	pageSize: 3,
};

function renderMovies(list: Movie[]) {
	const tableBody = document.querySelector('tbody') as HTMLTableSectionElement;

	for (let item of list) {
		const tableRow = document.createElement('tr');

		const titleTd = document.createElement('td');
		const titleLink = document.createElement('a');
		titleLink.href = `/movies/${item._id}`;
		titleLink.innerText = item.title;
		titleTd.append(titleLink);

		const genreTd = document.createElement('td');
		genreTd.innerText = item.genre.name;

		const stockTd = document.createElement('td');
		stockTd.innerText = item.numberInStock.toString();

		const rateTd = document.createElement('td');
		rateTd.innerText = '$' + item.dailyRentalRate.toLocaleString('uz-UZ');

		const actionsTd = document.createElement('td');
		actionsTd.innerHTML = '🩶';

		tableRow.append(titleTd, genreTd, stockTd, rateTd, actionsTd);
		tableBody.append(tableRow);
	}
}

function renderGenres() {

}
function renderPagination(total: number) {}

export const moviesInit = () => {
	renderMovies(movies);
	renderGenres();
	renderPagination(movies.length);
};

function paginate(items: Movie[], pageSize: number, currentPage: number) {
	let startIdx = (currentPage - 1) * pageSize;
	let endIdx = startIdx + pageSize;

	return items.slice(startIdx, endIdx);
}
