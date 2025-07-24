function summa() {
	let total = 0;

	for (const argument of arguments) {
		total += argument;
	}

	return total;
}

const nums = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// @ts-ignore
const result = summa(...nums);
console.log("result = ", result);
