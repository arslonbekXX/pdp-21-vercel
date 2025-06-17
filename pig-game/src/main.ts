import { DESTROY_ROLL_DICE, HOLD_ROLL_DICE, MAX_DICE, MAX_SCORE } from "./constants";
import { btnHold, btnNew, btnRoll, diceElement, playerElements } from "./elements";
import type { Game } from "./types";

let game: Game = {
	player1: {
		total: 0,
		current: 0,
		nextPlayer: "player2",
	},
	player2: {
		total: 0,
		current: 0,
		nextPlayer: "player1",
	},
	current: "player1",
};

// HANDLE FUNCTION
function handleRoll() {
	const dice = Math.floor(Math.random() * MAX_DICE) + 1; // [1,6]
	diceElement.src = `dice-${dice}.png`;

	const player = game[game.current];
	player.current = dice !== DESTROY_ROLL_DICE ? player.current + dice : DESTROY_ROLL_DICE;

	renderScore();
}

function handleHold() {
	const player = game[game.current];
	player.total += player.current;
	player.current = HOLD_ROLL_DICE;

	renderScore();
}

function handleNew() {
	game = {
		player1: {
			total: 0,
			current: 0,
			nextPlayer: "player2",
		},
		player2: {
			total: 0,
			current: 0,
			nextPlayer: "player1",
		},
		current: "player1",
	};

	const player = game[game.current];
	const currentElements = playerElements[game.current];

	currentElements.main.classList.remove("player--winner");
	currentElements.main.classList.add("player--active");
	currentElements.current.innerText = player.current.toString();
	currentElements.total.innerText = player.total.toString();

	const nextPlayer = game[player.nextPlayer];
	const nextElements = playerElements[player.nextPlayer];
	nextElements.main.classList.remove("player--winner", "player--active");
	nextElements.current.innerText = nextPlayer.current.toString();
	nextElements.total.innerText = nextPlayer.total.toString();

	diceElement.src = "";
}
// UI FUNCTION

function renderScore() {
	const player = game[game.current];
	const currentElements = playerElements[game.current];

	if (player.current === HOLD_ROLL_DICE) {
		game.current = game.current === "player1" ? "player2" : "player1";

		currentElements.total.innerText = player.total.toString();

		const isWinned = player.total >= MAX_SCORE;
		if (!isWinned) {
			// deactivate
			currentElements.main.classList.remove("player--active");
			currentElements.current.innerText = "0";

			// activate
			const nextElements = playerElements[player.nextPlayer];
			nextElements.main.classList.add("player--active");
		} else {
			currentElements.main.classList.replace("player--active", "player--winner");
			btnRoll.disabled = true;
			btnHold.disabled = true;
		}
	} else if (player.current === DESTROY_ROLL_DICE) {
		game.current = game.current === "player1" ? "player2" : "player1";

		// deactivate
		currentElements.main.classList.remove("player--active");
		currentElements.current.innerText = "0";

		// activate
		const nextElements = playerElements[player.nextPlayer];
		nextElements.main.classList.add("player--active");
	} else {
		currentElements.current.innerText = player.current.toString();
	}
}

// LOGIC FUNCTION
function init() {
	btnRoll.addEventListener("click", handleRoll);
	btnHold.addEventListener("click", handleHold);
	btnNew.addEventListener("click", handleNew);
}

window.addEventListener("load", init);
