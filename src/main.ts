const heading = document.querySelector('h1') as HTMLHeadingElement;
const btn = document.querySelector('button')!;

let count = 0;
btn.onclick = () => {
	heading.innerText = `Count: ${++count}`;
};
