import type { Genre, Movie } from './types';

export const movies: Movie[] = [
	{
		_id: '685cd106b0792713708b40c8',
		title: 'Airplane',
		numberInStock: 5,
		dailyRentalRate: 200,
		genre: {
			_id: '685cd106b0792713708b40c6',
			name: 'Comedy',
		},
	},
	{
		_id: '685cd106b0792713708b40ca',
		title: 'The Hangover',
		numberInStock: 10,
		dailyRentalRate: 4110,
		genre: {
			_id: '685cd106b0792713708b40c6',
			name: 'Comedy',
		},
	},
	{
		_id: '685cd106b0792713708b40cc',
		title: 'Wedding Crashers',
		numberInStock: 15,
		dailyRentalRate: 45000,
		genre: {
			_id: '685cd106b0792713708b40c6',
			name: 'Comedy',
		},
	},
	{
		_id: '685cd106b0792713708b40d1',
		title: 'Die Hard',
		numberInStock: 5,
		dailyRentalRate: 10000,
		genre: {
			_id: '685cd106b0792713708b40cf',
			name: 'Action',
		},
	},
	{
		_id: '685cd106b0792713708b40d3',
		title: 'Terminator',
		numberInStock: 10,
		dailyRentalRate: 2,
		genre: {
			_id: '685cd106b0792713708b40cf',
			name: 'Action',
		},
	},
	{
		_id: '685cd106b0792713708b40d5',
		title: 'The Avengers',
		numberInStock: 15,
		dailyRentalRate: 2,
		genre: {
			_id: '685cd106b0792713708b40cf',
			name: 'Action',
		},
	},
	{
		_id: '685cd106b0792713708b40da',
		title: 'The Notebook',
		numberInStock: 5,
		dailyRentalRate: 2,
		genre: {
			_id: '685cd106b0792713708b40d8',
			name: 'Romance',
		},
	},
	{
		_id: '685cd106b0792713708b40dc',
		title: 'When Harry Met Sally',
		numberInStock: 10,
		dailyRentalRate: 2,
		genre: {
			_id: '685cd106b0792713708b40d8',
			name: 'Romance',
		},
	},
	{
		_id: '685cd106b0792713708b40de',
		title: 'Pretty Woman',
		numberInStock: 15,
		dailyRentalRate: 2,
		genre: {
			_id: '685cd106b0792713708b40d8',
			name: 'Romance',
		},
	},
	{
		_id: '685cd106b0792713708b40e3',
		title: 'The Sixth Sense',
		numberInStock: 5,
		dailyRentalRate: 2,
		genre: {
			_id: '685cd106b0792713708b40e1',
			name: 'Thriller',
		},
	},
	{
		_id: '685cd106b0792713708b40e5',
		title: 'Gone Girl',
		numberInStock: 10,
		dailyRentalRate: 2,
		genre: {
			_id: '685cd106b0792713708b40e1',
			name: 'Thriller',
		},
	},
	{
		_id: '685cd106b0792713708b40e7',
		title: 'The Others',
		numberInStock: 15,
		dailyRentalRate: 2,
		genre: {
			_id: '685cd106b0792713708b40e1',
			name: 'Thriller',
		},
	},
	{
		_id: '685cd15b84c4e2137d445ff1',
		title: 'PDP Movie 1',
		genre: {
			_id: '685cd106b0792713708b40cf',
			name: 'Action',
		},
		numberInStock: 200,
		dailyRentalRate: 15,
	},
	{
		_id: '6860d4926c67c52cbb412af7',
		title: 'Sherlock Holmes 2',
		genre: {
			_id: '685cd106b0792713708b40e1',
			name: 'Thriller',
		},
		numberInStock: 100,
		dailyRentalRate: 50,
	},
];

export const genres: Genre[] = [
	{
		_id: '685cd106b0792713708b40cf',
		name: 'Action',
	},
	{
		_id: '685cd106b0792713708b40c6',
		name: 'Comedy',
	},
	{
		_id: '685cd106b0792713708b40d8',
		name: 'Romance',
	},
	{
		_id: '685cd106b0792713708b40e1',
		name: 'Thriller',
	},
];
