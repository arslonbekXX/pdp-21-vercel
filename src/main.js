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
// let nums1 = [10, 20, 30]; // SM_nums1_001 = HM_0001
// let nums2 = nums1; //  SM_nums2_002 = HM_0001
// nums2[0] = 0; // HM_0001[0] = 0
// console.log(nums1); // HM_0001
// console.log(nums2); // HM_0001
// const nums = [10, 30, 100];

// console.log('------- SIMPLE FOR LOOP ------');
// for (let i = 0; i < nums.length; i++) {
// 	const num = nums[i];
// 	console.log('num = ', num);
// }

// console.log('------- FOR OF LOOP FOR ARRAY ------');
// for (let num of nums) {
// 	console.log('num = ', num);
// }

// console.log('------- FOR OF LOOP FOR STRING ------');
// const str = 'Arslonbek';
// for (let azizbek of str) {
// 	console.log('azizbek = ', azizbek);
// }

/* Array push method */
// console.log('------ ARRAY PUSH METHOD ------');
// const nums = [10];
// const newLength = nums.push(20, 30, 40);
// console.log('nums = ', nums); // [10, 20, 30, 40]
// console.log('newLength = ', newLength); // 4

// /* Array pop method */
// console.log('------ ARRAY POP METHOD ------');
// const students = ['Jamshid', 'Boburbek', 'Sardorbek'];
// const deletedStudent = students.pop();
// console.log('students = ', students); // ["Jamshidbek", "Boburbek"]
// console.log('deletedStudent = ', deletedStudent); // ["Jamshidbek", "Boburbek"]

/* Array unshift method */
// console.log('------ ARRAY UNSHIFT METHOD ------');
// const groups = ['pdp-10', 'pdp-20', 'pdp-15'];
// const newLengthOfGroups = groups.unshift('pdp-21');
// console.log('groups = ', groups);
// console.log('newLengthOfGroups = ', newLengthOfGroups);

/* Array shift method */
// console.log('------ ARRAY SHIFT METHOD ------');
// const animals = ['dog', 'cat', 'mouse', 'bird'];
// const deletedAnimal = animals.shift();
// console.log('animals = ', animals);
// console.log('deletedAnimal = ', deletedAnimal);

/* Array slice method */
// console.log('------ ARRAY SLICE METHOD ------');
// const nums = [10, 20, 30, 40, 50];
// // const slicedNums = nums.slice(0, 100);
// const slicedNums = slice(nums, 0, 100);
// console.log('slicedNums = ', slicedNums);

// /**
//  *
//  * @param {any[]} items
//  * @param {number} startIdx
//  * @param {number} endIdx
//  * @returns {any[]}
//  */
// function slice(items, startIdx, endIdx = items.length) {
// 	let result = [];

// 	if (endIdx > items.length) endIdx = items.length;

// 	for (let i = startIdx; i < endIdx; i++) {
// 		const item = items[i];
// 		result.push(item);
// 	}

// 	return result;
// }

/* Array concat method */
// console.log('------ ARRAY CONCAT METHOD ------');
// const users1 = ['kent', 'mark', 'john'];
// const users2 = ['sherlock', 'holmes'];
// // const users = users1.concat(users2);
// const users = concat(users1, users2);
// console.log('users = ', users);

// /**
//  *
//  * @param {any[]} items1
//  * @param {any[]} items2
//  * @returns {any[]}
//  */
// function concat(items1, items2) {
// 	const result = [];

// 	for (const item of items1) {
// 		result[result.length] = item;
// 	}

// 	for (const item of items2) {
// 		result[result.length] = item;
// 	}

// 	return result;
// }

/* Array map method */
// console.log('------ ARRAY MAP METHOD ------');
// const foods = ['osh', 'manti', 'xonim va gumma'];
// function addWater(food, index) {
// 	return `${index}: ${food} + water 💦`;
// }
// // const foodsAndWaters = foods.map(addWater);
// const foodsAndWaters = map(foods, addWater);
// console.log('foods = ', foods);
// console.log('foodsAndWaters = ', foodsAndWaters);

// /**
//  *
//  * @param {any[]} items
//  * @param {function} cb
//  * @returns {any[]}
//  */
// function map(items, cb) {
// 	const result = [];

// 	for (let i = 0; i < items.length; i++) {
// 		result[i] = cb(items[i], i);
// 	}

// 	return result;
// }

/* Array filter method */
// console.log('------ ARRAY FILTER METHOD ------');
// const students = ['arslonbek', 'maftunaxon', 'boburbek', 'gozal', 'azizbek'];
// function filterMan(student, idx) {
// 	return student.endsWith('bek');
// }
// // const filteredStudents = students.filter(filterMan);
// const filteredStudents = filter(students, filterMan);
// console.log('filteredStudents = ', filteredStudents);

// /**
//  *
//  * @param {any[]} items
//  * @param {function} cb
//  * @returns {any[]}
//  */
// function filter(items, cb) {
// 	const result = [];

// 	for (let i = 0; i < items.length; i++) {
// 		const item = items[i];
// 		const isMatch = cb(item, i);
// 		if (isMatch) {
// 			result[result.length] = item;
// 		}
// 	}

// 	return result;
// }

/* Array splice method */
// const groups = ['pdp-10', 'pdp-5', 'pdp-21'];
// const deletedGroups = groups.splice(1, 1, 'pdp-6', 'pdp-7');
// console.log(groups);
// console.log(deletedGroups);

/* Array sort method */
// const students = ['alimbaev', 'abdullaev', 'usmanov'];
// students.sort();
// console.log(students);

/* Array sort for numbers */
// const points = [40, 20.5, 10.5, 220, 21.2, 100];
// points.sort((a, b) => a - b);
// console.log(points);

/* Array fill method */
// function getArray(value) {
// 	const nums = new Array(value).fill();
// 	const result = nums.map((item, idx) => idx + 1);

// 	return result;
// }

// const items = getArray(100); // [5,5,5,5,...]
// console.log('items = ', items);

// let a = []; // SM_a_001 = HM_0001
// let b = a; // SM_b_002 = HM_0001
// console.log(a === b); // HM_0001 === HM_0001

/* Stack memory with primitive types */
// let a = 10; // SM_a_001 = 10
// let b = a; // SM_b_002 = 11
// b++; // increment
// // console.log(a) // 10
// // console.log(b) // 11

/* Stack memory and Heap memory with non-primitive(reference) types */

/**
 * HEAP MEMORY
 * HM_0001 = [11]
 */
// let a = [10]; // SM_a_001 = HM_0001
// let b = a; // SM_b_002 = HM_0001
// b[0]++; // HM_0001[0]++;
// console.log(a); // HM_0001 -> [11]
// console.log(b); // HM_0001 -> [11]

/* Array forEach method */
// const names = ['arslonbek', 'boburbek', 'azizbek'];
// for (const name of names) {
// 	console.log('name = ', name);
// }

// for (let i = 0; i < names.length; i++) {
// 	const name = names[i];
// 	console.log('name = ', name);
// }

// names.forEach((name1, i) => {
// 	console.log('name = ', name);

// 	names.forEach((name2, j)=> {
// 		console.log("idx")
// 	})
// });

/* Spread operation */
/* Spread operation with simple function */
// function sum(a, b, c) {
// 	return a + b + c;
// }

// const nums = [20, 50, 40, 50, 60];

// // const total = sum(nums[0], nums[1], nums[2]);
// const total = sum(...nums);
// console.log('total = ', total);

/* Spread operation with Math static methods */
// const nums = [-1, 20, -10, -20, 500];
// const maxNum = Math.max(...nums);
// const minNum = Math.min(...nums);
// console.log('maxNum = ', maxNum);
// console.log('minNum = ', minNum);

/* Array every and some method */
// const boxes = ['box-10', 'box-8-abc', 'box-3', 'box-7'];

// const result = boxes.every((box) => {
// 	const splits = box.split('-'); // ['box','8','abc'],
// 	const number = Number(splits[1]);
// 	return !Number.isNaN(number);
// });

// console.log('result = ', result);

/* Array.from method */

function getArray(value) {
	const nums = new Array(value) // [value * empty]
 const filled = nums.fill() // [undefined, undefined]
	const mapped = nums.map((_, idx) => idx + 1);

	return mapped;
}

function getArray2(value) {
	const nums = Array.from({ length: value }, (_, idx) => idx + 1);

	return nums;
}

console.log(getArray2(10));
