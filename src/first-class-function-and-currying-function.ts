/* First Class Function */
// function a() {} // HM_0001
// const b = a; // HM_0001
// function c(callback: () => void) {
// 	return callback; // HM_0001
// } // HM_0002

// const d1 = c(a); // c(HM_0001) // HM_0002
// const d2 = c(b); // c(HM_0001) // HM_0002
// console.log(d1 == d2); // true
// console.log(d1 === d2); // true

/* Currying Function with Function Declaration */
// function add(a: number) {
// 	return function (b: number) {
// 		return function (c: number) {
// 			return a + b + c;
// 		};
// 	};
// }

/* Currying Function with Arrow Function */
// const add = (a: number) => (b: number) => (c: number) => a + b + c;

// const result = add(10)(20)(30);
// console.log(result);
