/* Node challenges */
const boxes = document.querySelectorAll('.box') as NodeListOf<HTMLDivElement>;

for (const box of boxes) {
	box.onclick = () => {
		let deleteIdx = -1;
		const row = box.parentElement as HTMLDivElement;
		for (let i = 0; i < row.children.length; i++) {
			if (row.children[i] === box) {
				deleteIdx = i;
				break;
			}
		}

		const rowWrapper = box.parentElement?.parentElement as HTMLDivElement;
		const rows = rowWrapper?.children as HTMLCollectionOf<HTMLDivElement>;

		for (const row of rows) {
			row.children[deleteIdx].remove();
		}
	};
}
