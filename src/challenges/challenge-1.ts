const btns = document.querySelectorAll('.btn') as NodeListOf<HTMLButtonElement>;

btns.forEach((btn) => {
	btn.addEventListener('click', () => {
		const deleteElementClassName = btn.getAttribute('deleteItem');
		const deleteElement = document.querySelector('.' + deleteElementClassName)!;
		deleteElement.remove();
	});
});
