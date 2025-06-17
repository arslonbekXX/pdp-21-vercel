const player1 = {
	main: document.querySelector(".player--0") as HTMLDivElement,
	total: document.querySelector<HTMLParagraphElement>("#score--0")!,
	current: document.querySelector<HTMLParagraphElement>("#current--0")!,
};

const player2 = {
	main: document.querySelector(".player--1") as HTMLDivElement,
	total: document.querySelector<HTMLParagraphElement>("#score--1")!,
	current: document.querySelector<HTMLParagraphElement>("#current--1")!,
};

export const playerElements = { player1, player2 };

export const diceElement = document.querySelector<HTMLImageElement>(".dice")!;
export const btnNew = document.querySelector<HTMLButtonElement>(".btn--new")!;
export const btnRoll = document.querySelector<HTMLButtonElement>(".btn--roll")!;
export const btnHold = document.querySelector<HTMLButtonElement>(".btn--hold")!;
