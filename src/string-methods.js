/* STRING METHODS */

/* toLowerCase() ✅ */
// let str = 'Hello WORLD';
// console.log(str.toLowerCase());

/* toUpperCase() ✅ */
// let str = 'Hello WORLD';
// console.log(str.toUpperCase());

/* charAt() */
// const str = 'PDP BEST UNIVERSITY';
// const char4 = str[-1]; // str.charAt(100);
// console.log('char4 = ', char4);

/* concat() */
// const str1 = 'PDP';
// const str2 = 'ACADEMY';
// const str3 = str1.concat(' ', str2); // str1 + ' ' + str2 // "PDP ACADEMY";
// console.log('str3 = ', str3);

/* indexOf() */
// const str = 'PDP BEST UNIVERSITY';
// const index = str.indexOf('U');
// console.log('index = ', index);

/* lastIndexOf() */
// const str = 'PDP BEST UNIVERSITY';
// const index = str.lastIndexOf('E');
// console.log('index = ', index);

/* slice() */
// const str = 'Kent C Dods';
// const lastName = str.slice(-4, -2);
// console.log('lastName = ', lastName);

/* replace() and replaceAll() */
// const str = 'Fox and Dog';
// const newStr = str.replace('o', 'b');
// console.log('newStr = ', newStr);

/* startsWith() */
// const str = 'PDP BEST UNIVERSITY';
// const isStartWithPDP = str.startsWith('pdp'.toUpperCase());
// console.log('isStartWithPDP = ', isStartWithPDP);

/* endsWith() */
// const str = 'PDP BEST UNIVERSITY';
// const isEndWithUNIVERSITY = str.endsWith('UNIVERSITY');
// console.log('isEndWithUNIVERSITY = ', isEndWithUNIVERSITY);

/* substring() */
// const str = 'PDP BEST UNIVERSITY';
// const newStr = str.substring(0, -3);
// console.log('newStr = ', newStr);

/* substr() */
// const str = 'PDP BEST UNIVERSITY';
// const newStr = str.substr(4, 4);
// console.log('newStr = ', newStr);

/* trim() */
// const str = '    PDP    BEST    UNIVERSITY      ';
// const newStr = str.trim();
// console.log('str = ', str);
// console.log('newStr = ', newStr);

/* trimStart() */
// const str = '    PDP    BEST    UNIVERSITY      ';
// const newStr = str.trimStart();
// console.log('str = ', str);
// console.log('newStr = ', newStr);

/* trimEnd() */
// const str = '    PDP    BEST    UNIVERSITY          ';
// const newStr = str.trimEnd();
// console.log('str = ', str.length);
// console.log('newStr = ', newStr.length);

/* split() */
// const str = 'arslonbek alimbaev shuxratvich';
// const arr = str.split('');
// console.log('arr = ', arr);

/* repeat() */
// const str = 'kent ';
// const newStr = str.repeat(3);
// console.log('newStr = ', newStr);

const day1 = '30';
const day2 = '60';
const day3 = '90';

console.log(day1 + 'days, ' + day2 + 'days,' + day3 + 'days'); // "30days, 60days, 90days"
console.log(`${day1}days, ${day2}days, ${day3}days`);
