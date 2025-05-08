/* arguments */
// const nums = [10, 20, 30, 40];

// function summa() {
// 	let total = 0;

// 	for (let argument of arguments) {
// 		total += argument;
// 	}

// 	return total;
// }

// const total = summa(...nums);
// console.log('total = ', total);

/* reset params */
// const nums = [10, 20, 30, 40];

// const summa = (...nums) => {
// 	let total = 0;

// 	for (let num of nums) {
// 		total += num;
// 	}

// 	return total;
// };

// const total = summa(...nums);
// console.log('total = ', total);

/* reset params vs spread operator */
// const items1 = [10, 90, 40];
// const items2 = [5, 20, 30];

// const items3 = [...items1, ...items2];
// console.log(...items3);

/* Array reduce method */
// const nums = [10, 20, 30, 40];

// function reduce(arr, callback, accumulatorInitialValue) {
// 	let accumulator = accumulatorInitialValue || arr[0];

// 	for (let i = accumulatorInitialValue ? 0 : 1; i < arr.length; i++) {
// 		accumulator = callback(accumulator, arr[i]);
// 	}

// 	return accumulator;
// }

// const total = nums.reduce((acc, cur) => acc + cur);
// console.log('total = ', total);

/* Array findIndex method */
// const students = [
// 	['Kent', 20],
// 	['John', 21],
// 	['Jane', 22],
// 	['Jim', 23],
// 	['Jill', 24],
// ];
// const studentIdx = students.findIndex((item) => item[0] === 'Sherlock');
// const student = students[studentIdx];
// console.log('studentIdx = ', studentIdx);
// console.log('student = ', student);

/* Array find method */
// const students = [
// 	['Kent', 20],
// 	['John', 21],
// 	['Jane', 22],
// 	['Jim', 23],
// 	['Jill', 24],
// ];
// const student = students.find((item) => item[0] === 'Sherlock');
// console.log('student = ', student);

/* Array flat method */
const nums = [10, 20, [30, [40, 50], 60]];
const flatNums = nums.flat(Infinity);
console.log(nums);
console.log(flatNums);
