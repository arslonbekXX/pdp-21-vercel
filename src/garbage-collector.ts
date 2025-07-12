/* Garbage Collector */

const a = 10;
const b = 100;

function main() {
	const a = 10;
	const b = 100;
	console.log('a = ', a);
	console.log('b = ', b);
}

// for (let i = 0; i < 100; i++) {
// 	main();
// }

setInterval(() => {
	console.log(a);
	console.log(b);
}, 2000);

// NPM - 24s (60 package)
// YARN - 62s (60 package)
// BUN - 5.3s (15 package)
