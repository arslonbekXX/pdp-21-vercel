/* Selectors */
// const box = document.getElementById('box-1')!; // HTMLElement
// const box1 = document.querySelector('.boxes .box') as HTMLDivElement; // Element
const boxes = document.querySelectorAll('.box') as NodeListOf<HTMLDivElement>; // NodeList
const boxes2 = document.getElementsByClassName('box') as HTMLCollectionOf<HTMLDivElement>; // HTMLCollection

console.log('boxes = ', boxes);
console.log('boxes2 = ', boxes2);

for (const box of boxes) {
	box.innerText = 'Salom';
}

for (const box of boxes2) {
	box.innerText = 'Salom 2';
}

// boxes2.forEach((box) => {
// 	box.innerText = 'Salom';
// });
