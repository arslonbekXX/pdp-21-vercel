import { generateHexColor } from './challenges/challenge-2';

const container = document.querySelector('.container') as HTMLDivElement;
const boxA = document.querySelector('.box-a') as HTMLDivElement;
const boxB = document.querySelector('.box-b') as HTMLDivElement;

function handleChangeColor(e: MouseEvent) {
	const currentTarget = e.currentTarget as HTMLDivElement;
	const hex = generateHexColor();

	currentTarget.style.background = hex;
}

container.addEventListener('click', handleChangeColor);
boxA.addEventListener('click', handleChangeColor);
boxB.addEventListener('click', handleChangeColor);
