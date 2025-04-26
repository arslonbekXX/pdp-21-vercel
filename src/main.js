/* First class function */
// let num1 = 10;
// let num2 = function () {};

// function sum(a, b) {
// 	return a + b;
// }

// const total = sum(num1, num2);

// console.log(total);

/* Anonymous function */
// const myFn1 = function () {
// 	console.log('I am fn1');
// };

/* Callback function */
// const fn1 = function (callback) {
// 	console.log('I am fn1 ' + callback());
// };

// const fn2 = function () {
// 	return 'I am fn2';
// };

// fn1(fn2);

// /* Challenge 1 */
// function hi1() {
// 	return 'Hi 👋🏻';
// }

// function hi2() {
// 	return 'Hi 👋🏻 👋🏻';
// }

// function kentFn(cb) {
// 	console.log(`Kent ` + cb());
// }

// function markFn(cb) {
// 	console.log(`Mark ${cb()}`);
// }

// kentFn(hi1); // Kent Hi 👋🏻,
// markFn(hi2); // Mark Hi 👋🏻 👋🏻
// kentFn(hi2); // Kent Hi 👋🏻 👋🏻
// markFn(hi1); // Mark Hi 👋🏻

// function display(cb, n) {
// 	const total = cb(n);
// 	console.log(`total[${a}] = `, total);
// }

// function summaN(n) {
// 	let total = 0;

// 	for (let i = 1; i <= n; i++) {
// 		total += i;
// 	}

// 	return total;
// }

// display(summaN, 100);

// let values = ['arslonbek', 'alimbaev', 24]; // SM_nums_001 = []

// let firstName = 'arslonbek';
// let lastName = 'alimbaev';
// let age = 24;

// console.log(values[2]);
// console.log(age);
/* Primitive iterable */
// let value = 'Kent';
// value[0] = 'M';
// console.log(value);

// /* Reference iterable */
// let value2 = ['K', 'E', 'N', 'T'];
// value2[0] = 'M';
// console.log(value2);

/* Array */
// const a = 10;
// a = 100;
// console.log(a);
// /* Stack memory */
// let a = 10; // SM_a_001 = 10
// let b = 10; // SM_b_002 = 10
// let c = a + b; // SM_c_003 = 20
// c = 200; // SM_c_003 = 200
// console.log(c);

/* Heap memory */
/**
 * ---HEAP MEMORY---
 * HM_0001 = [100, 20, 30]
 *
 * ---STACK MEMORY---
 * SM_nums_001 = HM_0001
 */
// const nums = [10, 20, 30];
// nums[0] = 100; // HM_0001[0] = 100
// console.log(nums);

// let a = 10; // SM_a_001 = 10
// let b = a; // SM_b_002 = 10;
// b = 30; // SM_b_002 = 30;
// console.log(a); // SM_a_001 = 10
// console.log(b); // SM_b_002 = 30

/**
 * ---HEAP MEMORY---
 * HM_0001 = [0, 20, 30]
 *
 * ---STACK MEMORY---
 * SM_nums1_001 = HM_0001
 * SM_nums2_002 = HM_0001
 */
let nums1 = [10, 20, 30]; // SM_nums1_001 = HM_0001
let nums2 = nums1; //  SM_nums2_002 = HM_0001
nums2[0] = 0; // HM_0001[0] = 0
console.log(nums1); // HM_0001
console.log(nums2); // HM_0001
