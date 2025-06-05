// const button = document.querySelector('button');

// button?.addEventListener('click', (event) => {
// 	console.log('Button was clicked');
// 	console.log('event = ', event);
// });

// button?.addEventListener('delete', (event) => {
// 	console.log('event = ', event);
// 	console.log('Button was deleted');
// 	(event.target as HTMLButtonElement).remove();
// });

// button?.dispatchEvent(new MouseEvent('click'));
// button?.dispatchEvent(new Event('delete'));

const messagesWrapper = document.querySelector('.messages-wrapper');

messagesWrapper?.addEventListener('message', (event: any) => {
	console.log('New Message', event.detail.text);

	const list = messagesWrapper.querySelector('.list') as HTMLUListElement;
	const listItem = document.createElement('li');
	listItem.className = 'list-item';
	listItem.innerText = event.detail.text;
	list.append(listItem);
});

for (let i = 1; i <= 5; i++) {
	const text = `Hi-${i}`;
	const delay = 1000 * i;
	setTimeout(() => {
		const event = new CustomEvent('message', { detail: { text } });
		messagesWrapper?.dispatchEvent(event);
	}, delay);
}
