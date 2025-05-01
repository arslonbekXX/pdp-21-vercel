/* Function declaration */
function sum(a, b) {
	return a + b;
}

/* Arrow function (Function expression) */
const sum2 = (a, b) => {
	return a + b;
};

const sum3 = (a, b) => a + b;

console.log(sum(10, 20));
console.log(sum2(10, 20));
console.log(sum3(10, 20));
