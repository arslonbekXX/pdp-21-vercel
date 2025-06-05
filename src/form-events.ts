const form = document.forms[0] as HTMLFormElement;

form.addEventListener('submit', (event) => {
	event.preventDefault();

	const usernameInput = form.elements[0] as HTMLInputElement;
	const username = usernameInput.value;

	const passwordInput = form.elements[1] as HTMLInputElement;
	const password = passwordInput.value;

	console.log('username = ', username);
	console.log('password = ', password);

	passwordInput.value = '';
});

// @ts-ignore
const usernameInput = form.elements.username as HTMLInputElement;
usernameInput.addEventListener('focus', () => {
	usernameInput.value = 'Ha Ha Ha';
	usernameInput.disabled = true;
});

usernameInput.addEventListener('blur', () => {
	usernameInput.disabled = false;
});
