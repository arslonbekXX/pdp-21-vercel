import { genres, movies } from '../db';
import type { Genre, Movie } from '../types';
import { paginate } from '../utils';

const state = {
	genreId: '',
	currentPage: 2,
	pageSize: 3,
};

// HANDLE FUNCTION
function handleGenreSelect(genre: Genre) {
	state.genreId = genre._id;

	renderGenres();
}

// UI FUNCTION

function renderMovies(list: Movie[]) {
	const tableBody = document.querySelector('tbody') as HTMLTableSectionElement;

	for (const { _id, title, numberInStock, dailyRentalRate, genre } of list) {
		const tableRow = document.createElement('tr'); // <tr></tr>

		const titleTd = document.createElement('td'); // <td></td>
		const titleLink = document.createElement('a'); // <a></a>
		titleLink.href = `/movies/${_id}`; // <a href="/movies/{_id}"></a>
		titleLink.innerText = title; // <a href="/movies/{_id}">{title}</a>
		titleTd.append(titleLink); // <td><a href="/movies/{_id}">{title}</a></td>

		const genreTd = document.createElement('td'); // <td></td>
		genreTd.innerText = genre.name; // <td>{genre.name}</td>

		const stockTd = document.createElement('td'); // <td></td>
		stockTd.innerText = numberInStock.toString(); // <td>{numberInStock}</td>

		const rateTd = document.createElement('td'); // <td></td>
		rateTd.innerText = '$' + dailyRentalRate.toLocaleString('uz-UZ'); // <td>${dailyRentalRate}</td>

		const actionsTd = document.createElement('td'); // <td></td>
		actionsTd.innerHTML = '🩶'; // <td>🩶</td>

		tableRow.append(titleTd, genreTd, stockTd, rateTd, actionsTd);
		/**
		 * <tr>
		 * 		<td><a href="/movies/{_id}">{title}</a></td>
		 *   <td>{genre.name}</td>
		 *   <td>{numberInStock}</td>
		 *   <td>${dailyRentalRate}</td>
		 *   <td>🩶</td>
		 * </tr>
		 */
		tableBody.append(tableRow);
		/**
		* <tbody>
		    <tr>
	        		<td><a href="/movies/{_id}">{title}</a></td>
           <td>{genre.name}</td>
   								<td>{numberInStock}</td>
											<td>${dailyRentalRate}</td>
											<td>🩶</td>
 						</tr>
		    <tr>
	        		<td><a href="/movies/{_id}">{title}</a></td>
           <td>{genre.name}</td>
   								<td>{numberInStock}</td>
											<td>${dailyRentalRate}</td>
											<td>🩶</td>
 						</tr>
							...
		* </tbody>
		*
		*
		*
		*
		*
		*
	 */
	}
}

function renderGenres() {
	const listGroup = document.querySelector('.list-group') as HTMLUListElement;
	const fragment = document.createDocumentFragment();

	for (let genre of genres) {
		const listItem = document.createElement('li'); // <li></li>
		listItem.className = `list-group-item`; // <li class="list-group-item"></li>
		listItem.innerText = genre.name; // <li class="list-group-item">{genre.name}</li>

		if (genre._id === state.genreId) listItem.classList.add('active');

		listItem.onclick = () => handleGenreSelect(genre);
		fragment.append(listItem);
	}

	listGroup.replaceChildren(fragment);
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

// LOGIC FUNCTION

export const moviesInit = () => {
	const paginatedMovies = paginate(movies, state.pageSize, state.currentPage);

	renderMovies(paginatedMovies);
	renderGenres();
	renderPagination(movies.length);
};
