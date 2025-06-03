const nextBtn = document.querySelector('.next-btn') as HTMLButtonElement;
const flashGreen = document.querySelector('.flash-green') as HTMLDivElement;
const flashYellow = document.querySelector('.flash-yellow') as HTMLDivElement;
const flashRed = document.querySelector('.flash-red') as HTMLDivElement;

nextBtn.onclick = () => {
	if (flashGreen.classList.contains('on')) {
		flashGreen.classList.toggle('on');
		flashYellow.classList.toggle('on');
	} else if (flashYellow.classList.contains('on')) {
		flashYellow.classList.toggle('on');
		flashRed.classList.toggle('on');
	} else {
		flashRed.classList.toggle('on');
		flashGreen.classList.toggle('on');
	}
};
