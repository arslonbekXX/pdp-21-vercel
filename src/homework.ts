// Challenge 1: Error Handling
// Type: (a: number, b: number) => number
function safeDivide(a, b) {
	// TODO: try/catch/finally ishlatib, 0 ga bo‘lish xatoligini ushlang
}

console.log(safeDivide(10, 2));
console.log(safeDivide(10, 0));

// Challenge 2: Object methods
// Type: (obj: { [key: string]: any }) => string[]
// const user = {
//  name: "Ali",
//  age: 25,
//  country: "Uzbekistan",
//  isActive: true
// };

// function getStringValues(obj: { [key: string]: any }) {

//  const values = Object.values(obj);
//  const onlyStringValues = values.filter((value) => typeof value === "string");
//  return onlyStringValues;
// }

// console.log(getStringValues(user));

// Challenge 3: Function methods (call, apply, bind)
// Type: function greet(greeting: string): string
const person = {
	name: "Arslonbek",
};

function greet(greeting) {
	// TODO: this.name ni greeting bilan birlashtirib qaytaring
}

// 1. call
console.log("call result:" /* greet.call(...) */);

// 2. apply
console.log("apply result:" /* greet.apply(...) */);

// 3. bind
// const boundGreet = /* greet.bind(...) */;
console.log("bind result:" /* boundGreet() */);

// Challenge 4: Function types (void, non-void)
// Type:
// logMessage: (message: string) => void
// sum: (a: number, b: number) => number
// function logMessage(message: string): void {
// 	console.log(message);
// }

// function sum(a: number, b: number): number {
// return a + b;
// }

// logMessage("Hello world");
// console.log("sum result:", sum(3, 7));

// Challenge 5: HOF + Callback
// Type: (arr: number[], cb: (n: number) => number) => number[]
// function processData(numbers: number[], callback: (n: number) => number) {
// return numbers.map(callback)
// }

// const doubled = processData([1, 2, 3], function(n: number) {
//  return n * 2;
// });

// console.log("processData result:", doubled);

// Challenge 6: Declaration vs Expression vs Arrow
// Type: (n: number) => number

// 1. Function Declaration
// function square1(n: number) {
// 	return n * n;
// }

// // 2. Function Expression
// const square2 = function (n: number) {
// 	return n * n;
// };

// // 3. Arrow Function
// const square3 = (n: number) => n * n;

// console.log("square1:", square1(5));
// console.log("square2:", square2(5));
// console.log("square3:", square3(5));
