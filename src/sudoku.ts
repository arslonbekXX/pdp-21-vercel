const cells = document.querySelectorAll('.cell') as NodeListOf<HTMLDivElement>;

cells.forEach((cell) => {
	cell.onclick = () => {
		cells.forEach((cell) => (cell.className = 'cell'));

		const parent = cell.parentElement as HTMLDivElement;
		const innerCells = parent.children as HTMLCollectionOf<HTMLDivElement>;

		for (const innerCell of innerCells) {
			innerCell.className = 'cell cell-active';
		}

		cell.className = 'cell cell-selected';
	};
});
