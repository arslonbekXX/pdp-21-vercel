// import { cellElms, infoElm, resetBtn } from './elements';
// import type { Player } from './types';

// let nextPlayer: Player = 'X';
// let winner: Player | null = null;
// // HANDLE FUNCTIONS
// function handleCell(event: MouseEvent) {
// 	const currentCell = event.target as HTMLDivElement;
// 	const isAlreadyFilled = currentCell.innerText;

// 	if (isAlreadyFilled || winner) return;

// 	currentCell.innerText = nextPlayer;

// 	const cells = Array.from(cellElms);
// 	const isAllCellFilled = cells.every((cell) => cell.innerText !== '');

// 	if (winner === null && isAllCellFilled) {
// 		infoElm.innerText = `🤝 Draw 🤝`;
// 		return;
// 	}

// 	nextPlayer = nextPlayer === 'X' ? 'O' : 'X';
// 	infoElm.innerText = `Next Player: ${nextPlayer}`;
// 	checkWinner();
// }

// function handleReset() {
// 	nextPlayer = 'X';
// 	winner = null;
// 	cellElms.forEach((cellElm) => (cellElm.innerText = ''));
// 	infoElm.innerText = `Next Player: ${nextPlayer}`;
// }

// // UI FUNCTIONS

// // LOGIC FUNCTIONS
// function checkWinner() {
// 	const combinations = [
// 		[0, 1, 2],
// 		[3, 4, 5],
// 		[6, 7, 8],
// 		[0, 3, 6],
// 		[1, 4, 7],
// 		[2, 5, 8],
// 		[0, 4, 8],
// 		[2, 4, 6],
// 	];

// 	for (const [a, b, c] of combinations) {
// 		if (
// 			cellElms[a].innerText !== '' &&
// 			cellElms[a].innerText === cellElms[b].innerText &&
// 			cellElms[b].innerText === cellElms[c].innerText
// 		) {
// 			winner = cellElms[a].innerText as Player;
// 			infoElm.innerText = `Winner ${winner}`;
// 		}
// 	}
// }

// function init() {
// 	for (const cellElm of cellElms) {
// 		cellElm.onclick = handleCell;
// 	}
// 	resetBtn.addEventListener('click', handleReset);
// }

// window.addEventListener('load', init);
// const person = {
// 	name: 'kent',
// 	age: 23,
// 	job: undefined,
// 	run() {
// 		console.log('Kent is running...');
// 	},
// };
// console.log(person);
// console.log(JSON.stringify(person));

const a = {
	name: 'Boburbek',
	run() {
		console.log('I am running');
	},
};
const a1 = JSON.stringify(a);
const a2 = JSON.parse(a1);
console.log(a);
console.log(a1);
console.log(a2);
