import { BOARD_KEY, LEVEL_DEFAULT, LEVEL_KEY } from "./constants";
import { boardElement, infoElm, levelBtn, resetBtn } from "./elements";
import type { Player } from "./types";

let board: Array<Player> = initialBoard();

// HANDLE FUNCTIONS
function handleCell(event: MouseEvent) {
	const cellElement = event.target as HTMLDivElement;
	const cellIdx = +cellElement.dataset.idx!;

	board[cellIdx] = getNextPlayer();
	localStorage.setItem(BOARD_KEY, JSON.stringify(board));

	renderBoard();
}

function handleReset() {
	const { level } = getLevel();
	board = new Array(level ** 2).fill(null);
	localStorage.setItem(BOARD_KEY, JSON.stringify(board));
	renderBoard();
}

function handleLevel() {
	let level = Number(prompt("Please enter level number ~ [3,8]")) || LEVEL_DEFAULT;
	localStorage.setItem(LEVEL_KEY, level.toString());

	handleReset();
}

// UI FUNCTIONS
function renderBoard() {
	const fragment = document.createDocumentFragment();
	const { level } = getLevel();
	const isAllCellFilled = board.filter(Boolean).length === level ** 2;
	const winner = getWinner();
	console.log("winner = ", winner);

	boardElement.setAttribute("style", `--level: ${level}`);

	// CELL RENDERING
	for (let i = 0; i < board.length; i++) {
		const cellElement = document.createElement("div"); // <div></div>
		const cell = board[i];
		cellElement.className = "cell"; // <div class="cell"></div>
		cellElement.innerText = cell || ""; // <div class="cell"></div>
		cellElement.setAttribute("data-idx", i.toString()); // <div class="cell" data-idx="${i}"></div>

		const isCanPlay = !(cell || winner || isAllCellFilled);

		if (isCanPlay) cellElement.onclick = handleCell;

		fragment.append(cellElement);
	}

	boardElement.replaceChildren(fragment);

	// INFO RENDERING
	if (winner) infoElm.innerText = `Winner: ${winner}`;
	else if (isAllCellFilled) infoElm.innerText = "🤝 Draw 🤝";
	else infoElm.innerText = `Next Player: ${getNextPlayer()}`;
}

// LOGIC FUNCTIONS
function getWinnerFromIndexes(idxes: number[]) {
	let winner: Player = board[idxes[0]];

	for (const idx of idxes) {
		if (board[idx] !== winner) return null;
	}

	return winner;
}

function getWinner() {
	let winner: Player = null;

	const { level } = getLevel();

	// ROW CHECKING
	for (let i = 0; i < level; i++) {
		const idxes: number[] = [];

		for (let j = 0; j < level; j++) {
			const idx = i * level + j;

			idxes.push(idx);
		}

		winner = getWinnerFromIndexes(idxes);
		if (winner) return winner;
	}

	// COLUMN CHECKING
	for (let i = 0; i < level; i++) {
		const idxes: number[] = [];

		for (let j = 0; j < level; j++) {
			const idx = j * level + i;

			idxes.push(idx);
		}

		winner = getWinnerFromIndexes(idxes);
		if (winner) return winner;
	}

	// LTR DIO
	const ltrDioIdxes = [];

	for (let i = 0; i < level; i++) {
		const idx = i * (level + 1);
		ltrDioIdxes.push(idx);
	}

	winner = getWinnerFromIndexes(ltrDioIdxes);
	if (winner) return winner;

	// RTL DIO
	const rtlDioIdxes = [];

	for (let i = 0; i < level; i++) {
		const idx = (i + 1) * (level - 1);
		rtlDioIdxes.push(idx);
	}

	winner = getWinnerFromIndexes(rtlDioIdxes);

	return winner;
}

function initialBoard() {
	const { level, isStoredLevel } = getLevel();
	let board: Array<Player> = new Array(level ** 2).fill(null);

	if (isStoredLevel) {
		const storedBoard = localStorage.getItem(BOARD_KEY);
		if (storedBoard) board = JSON.parse(storedBoard);
	} else {
		localStorage.setItem(BOARD_KEY, JSON.stringify(board));
	}

	return board;
}

function getLevel() {
	let level = Number(localStorage.getItem(LEVEL_KEY));
	const isStoredLevel = Boolean(level);

	if (!isStoredLevel) {
		level = Number(prompt("Please enter level number ~ [3,6]")) || LEVEL_DEFAULT;
		localStorage.setItem(LEVEL_KEY, level.toString());
	}

	return { level, isStoredLevel };
}

function getNextPlayer() {
	const filteredBoard = board.filter(Boolean);
	return filteredBoard.length % 2 === 0 ? "X" : "O";
}

function init() {
	renderBoard();
	resetBtn.onclick = handleReset;
	levelBtn.onclick = handleLevel;
}

window.addEventListener("load", init);
