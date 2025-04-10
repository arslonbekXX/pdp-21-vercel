// 1. Even number
// Check whether a given number is even or odd
function isEven(n) {
	const qoldiq = n % 2; // 0
	if (qoldiq === 0) return true;
	else return false;
}

// 2. String length
// Count the length of a string 01234
function stringLength(str) {
	let index = 0;
	while (str[index] !== undefined) {
		index++;
	}

	return index;
}

// 3. Reverse string
// Read the string in reverse order
function reverseString(str) {}

// 4. Concatenate strings
// Combine two strings
function concatenateStrings(str1, str2) {}

// 5. Slice string
// Slice a string from a start index to an end index (not including end)
function sliceString(str, start, end) {
	let result = '';
	for (let i = start; i < end; i++) {
		const character = str[i];
		result += character;
	}

	return result;
}

// 6. Replace character in string
// Replace all occurrences of a character with another character
function replaceChar(str, oldChar, newChar) {}

// 7. Search substring
// Find the starting index of a substring in a string
function searchSubstring(str, target) {}

// 8. Compare strings
// Compare two strings for equality
function compareStrings(str1, str2) {}

// Test results
console.log('Exercise 1:', isEven(4)); // true
console.log('Exercise 2:', stringLength('boburbek')); // 5
console.log('Exercise 3:', reverseString('pdp-2025')); // '5202-pdp'
// console.log('Exercise 4:', concatenateStrings('hello', 'world')); // 'helloworld'
console.log('Exercise 5:', sliceString('hello world', 0, 5)); // 'llo'
// console.log('Exercise 6:', replaceChar('hello', 'e', 'a')); // 'hallo'
// console.log('Exercise 7:', searchSubstring('hello world', 'wor')); // -1
// console.log('Exercise 8:', compareStrings('hello', 'hello')); // true
