const btnLoadSingle = document.querySelector<HTMLButtonElement>("#btn-load-single")!;
const btnLoadList = document.querySelector<HTMLButtonElement>("#btn-load-list")!;
const todoId = 1;

const handleLoadSingle = (e: MouseEvent) => {};
const handleLoadList = (e: MouseEvent) => {
 
};

btnLoadSingle.addEventListener("click", handleLoadSingle);
btnLoadList.addEventListener("click", handleLoadList);

enum READY_STATE {
	UNSENT = 0,
	OPENED = 1,
	HEADERS_RECEIVED = 2,
	LOADING = 3,
	DONE = 4,
}

const xhr = new XMLHttpRequest();
console.log("readyState = ", xhr.readyState);

xhr.onreadystatechange = () => {
	console.log("readyState = ", xhr.readyState);
	if (xhr.readyState === READY_STATE.DONE) {
		console.log(xhr.responseText);
	}
};

xhr.open("GET", `https://jsonplaceholder.typicode.com/todos`);
xhr.send();
