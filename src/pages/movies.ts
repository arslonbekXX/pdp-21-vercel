import { genres, movies } from '../db';
import type { Movie } from '../types';

const state = {
	genre: 'All',
	currentPage: 2,
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
	const listGroup = document.querySelector('.list-group') as HTMLUListElement;
	for (let genre of genres) {
		const listItem = document.createElement('li'); // <li></li>
		listItem.className = 'list-group-item'; // <li class="list-group-item"></li>
		listItem.innerText = genre.name; // <li class="list-group-item">{genre.name}</li>
		listGroup.append(listItem);
	}
}
function renderPagination(total: number) {
	const maxPage = Math.ceil(total / state.pageSize);
	const pagination = document.querySelector('.pagination') as HTMLUListElement;
	for (let page = 1; page <= maxPage; page++) {
		const pageItem = document.createElement('li'); // <li></li>
		pageItem.className = `page-item ${page === state.currentPage ? 'active' : ''}`; // <li class="page-item"></li>

		const pageLink = document.createElement('a'); // <a></a>
		pageLink.className = 'page-link'; // <a class="page-link"></a>
		pageLink.href = '#'; // <a class="page-link" href="#"></a>
		pageLink.innerText = page.toString(); // <a class="page-link" href="#">{page}</a>

		pageItem.append(pageLink); // <li class="page-item"><a class="page-link" href="#">{page}</a></li>
		pagination.append(pageItem);
	}
}

export const moviesInit = () => {
	const paginatedMovies = paginate(movies, state.pageSize, state.currentPage);

	renderMovies(paginatedMovies);
	renderGenres();
	renderPagination(movies.length);
};

function paginate(items: Movie[], pageSize: number, currentPage: number) {
	let startIdx = (currentPage - 1) * pageSize;
	let endIdx = startIdx + pageSize;

	return items.slice(startIdx, endIdx);
}
