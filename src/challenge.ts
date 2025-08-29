type Callback = (num: number) => void;
const random = () => Math.floor(Math.random() * 100);

function getA(callback: Callback) {
	setTimeout(() => callback(random()), 1000);
}
function getB(callback: Callback) {
	setTimeout(() => callback(random()), 2000);
}
function getC(callback: Callback) {
	setTimeout(() => callback(random()), 2000);
}
function getD(callback: Callback) {
	setTimeout(() => callback(random()), 2000);
}

getA((a) => {
	console.log("after 1s : a = ", a);
	getB((b) => {
		console.log("after 3s : b = ", b);
		getC((c) => {
			console.log("after 5s : c = ", c);
			getD((d) => {
				console.log("after 7s : d = ", d);
			});
		});
	});
});

/**
 * after 1s : a = 10
 * after 3s : b = 20
 * after 5s : c = 30
 * after 7s : d = 40
 *
 */
