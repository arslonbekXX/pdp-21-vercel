/* Node challenges */
const boxes = document.querySelectorAll('.box') as NodeListOf<HTMLDivElement>;

for (const box of boxes) {
	box.onclick = () => {
		const parent = box.parentElement as HTMLDivElement;
		const deleteIdx = Number(box.innerText.split('-')[1]);

		parent.children[deleteIdx - 1].remove();
	};
}
