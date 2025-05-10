console.log('------- TOP CHAR ------');

/**
 * @param {string} str String of characters
 * @return {string} Top character
 */
function topChar(str) {
	// "aabbbcc"
	let maxCount = 0; // 3
	let maxChar = str[0] || ''; // "b"

	for (let i = 0; i < str.length; i++) {
		const currentChar = str[i]; // "b"
		let count = 1; // 3

		for (let j = i + 1; j < str.length; j++) {
			const nextChar = str[j]; // b

			if (currentChar === nextChar) count++;
		}

		if (count > maxCount) {
			maxChar = currentChar;
			maxCount = count;
		}
	}

	return maxChar;
}

console.log(topChar('aaaabbbcc') === 'a');
console.log(topChar('xyzxyzx') === 'x');
console.log(topChar('abcde') === 'a');
console.log(topChar('aaaaa') === 'a');
console.log(topChar('abababa') === 'a');
console.log(topChar('') === '');
