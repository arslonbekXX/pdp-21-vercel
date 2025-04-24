// function checkIsNumber(character) {
// 	const regexp = /\d/;
// 	return regexp.test(character);
// }

// let str = 'abc2sd20bb100c20'; // 7 // 142
// let sum = 0;
// for (let i = 0; i < str.length; i++) {
// 	const char = str[i];
// 	const isNumber = checkIsNumber(char);
// 	if (isNumber) sum += char;
// 	console.log(`char[${isNumber ? 'number' : 'string'}] = `, char);
// }

// console.log('sum = ', sum);

// /* Typeof operation */
// console.log(typeof false);
// console.log(typeof true);
// console.log(typeof 0);
// console.log(typeof NaN); // Not a Number
// console.log(typeof '');
// console.log(typeof null);
// console.log(typeof undefined);

/* Truthy and Falsy(0, '', null, undefined, NaN, false) */
/* any type -> boolean */
// const b1 = false; // boolean
// const b2 = Boolean(0); // false
// const b3 = Boolean(''); // false
// const b4 = Boolean(null); // false
// const b5 = Boolean(undefined); // false
// const b6 = Boolean(NaN); // false
// const b7 = Boolean(1); // true
// const b8 = Boolean(-1); // true

// /* any type -> string  */
// const s1 = 'Hello world'; // "Hello world"
// const s2 = String(123); // "123"
// const s3 = String(true); // "true"
// const s4 = String(false); // "false"
// const s5 = String(null); // "null"
// const s6 = String(undefined); // "undefined"
// const s7 = String(NaN); // "NaN"
// const s8 = String(Infinity); // "Infinity"

/* any type -> number */
// const n1 = +'123'; // 123
// const n2 = +'123.456'; // 123.456
// const n3 = Number('123.456abc'); // NaN
// const n4 = Number(true); // 1
// const n5 = Number(false); // 0

// console.log(n2);

// let a = 10;
// let b = '35';
// let c = a + Number(b);
// let c2 = a + Number(b) - 10 + 20 + Number('30');
// console.log(c);
// console.log(c2);

// let a = 130;
// let b = String(a)

function sameStarChar(str) {
	const regexp = /\w\*\w/gi;

	const matches = str.match(regexp) || [];

	// for (let i = 0; i < matches.length; i++) {
	// 	const match = matches[i]; // "c*d"
	// 	if (match[0] !== match[1]) return false;
	// }

	return matches;
}

console.log(sameStarChar('abc*dfg*bac'));
console.log(sameStarChar('abc*dfg*'));
console.log(sameStarChar('12*2*3*')); //  false
