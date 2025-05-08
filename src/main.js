/* Array reduce method */
const nums = [20, 30, 40, 50, 60, 70];
function summa(a, b) {
	console.log(arguments);
	return a + b;
}

const total = summa(...nums);
console.log('total = ', total);
