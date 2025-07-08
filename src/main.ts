/* SPREAD Operator */
function mathMax(...numbers: number[]) {
	return Math.max(...numbers);
}

const nums = [10, 30, 11, 50, 60];

const max = mathMax(...nums);
console.log('max = ', max);

/* REST Params */
const students = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
const [first, second, ...rest] = [...students];
console.log(first); // Alice
console.log(second); // Bob
console.log(rest); // ['Charlie', 'David', 'Eve']
