document.addEventListener('keyup', (event) => {
	console.log('[KEYUP] event = ', event.code);
});
document.addEventListener('keydown', (event) => {
	console.log('[KEYDOWN] event = ', event.code);
});
document.addEventListener('keypress', (event) => {
	console.log('[KEYPRESS] event = ', event.code);
});
