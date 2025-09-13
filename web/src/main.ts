import { sleep } from './utils';

const btnGetList = document.querySelector('.btn-get-list') as HTMLButtonElement;
const btnGetSingle = document.querySelector('.btn-get-single') as HTMLButtonElement;
const btnPostSingle = document.querySelector('.btn-post-single') as HTMLButtonElement;
const btnPutSingle = document.querySelector('.btn-put-single') as HTMLButtonElement;
const btnDeleteSingle = document.querySelector('.btn-delete-single') as HTMLButtonElement;

const baseURL = 'http://10.30.0.189:4000';
const todoId = '6d2c604a-4915-4150-9993-3086adb3561d';
interface Todo {
	id: string;
	title: string;
	completed: boolean;
}

function http<T>(method: string, url: string, body?: any) {
	return new Promise<T>((resolve) => {
		const xhr = new XMLHttpRequest();

		xhr.open(method, url);
		xhr.setRequestHeader('Content-Type', 'application/json');
		xhr.send(body ? JSON.stringify(body) : undefined);

		xhr.onload = () => resolve(JSON.parse(xhr.responseText));
	});
}

btnGetList.onclick = async () => {
	console.log('Getting list...');
	await sleep(0.5);
	const todos = await http<Todo[]>('GET', `${baseURL}/todos`);
	console.log('todos = ', todos);
};
btnGetSingle.onclick = async () => {
	console.log('Getting single...');
	await sleep(0.5);
};
btnPostSingle.onclick = async () => {
	console.log('Posting single...');
	await sleep(0.5);
};
btnPutSingle.onclick = async () => {
	console.log('Putting single...');
	await sleep(0.5);
};
btnDeleteSingle.onclick = async () => {
	console.log('Deleting single...');
	await sleep(0.5);
};
