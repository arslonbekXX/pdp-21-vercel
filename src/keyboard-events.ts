const boxLeft = document.querySelector('.box-left') as HTMLDivElement;
const boxRight = document.querySelector('.box-right') as HTMLDivElement;

document.addEventListener('keydown', (event) => {
	const box = event.shiftKey ? boxRight : boxLeft;

	const keyCode = event.code;

	if (keyCode === 'Minus') {
		box.style.width = `${box.clientWidth - 10}px`;
	} else if (keyCode === 'Equal') {
		box.style.width = `${box.clientWidth + 10}px`;
	}
});
