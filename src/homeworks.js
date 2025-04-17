/**
 *
 * @param {string} str
 * @param {string} search
 * @param {number} position
 * @returns {number}
 */
function indexOfString(str, search, position = 0) {
	for (let i = position; i < str.length; i++) {
		let sub = '';
		for (let j = i; j < i + search.length; j++) {
			sub += str[j];
		}
		if (sub === search) {
			return i;
		}
	}

	return -1;
}

/**
 *
 * @param {string} str
 * @param {string} search
 * @param {number} position
 * @returns {number}
 */
function lastIndexOfString(str, search, position = 0) {
	let idx = -1;

	for (let i = position; i < str.length; i++) {
		let sub = '';
		for (let j = i; j < i + search.length; j++) {
			sub += str[j];
		}
		if (sub === search) {
			idx = i;
		}
	}

	return idx;
}

/**
 *
 * @param {string} str
 * @param {number} startIdx
 * @param {number} endIdx
 * @returns {string}
 */
function sliceString(str, startIdx, endIdx) {
	// your code
}

/**
 *
 * @param {string} str
 * @param {string} search
 * @returns {boolean}
 */
function startsWithString(str, search) {
	// your code
}

/**
 * @param {string} str
 * @param {string} search
 * @returns {boolean}
 */
function endsWithString(str, search) {
	// your code
}

/**
 *
 * @param {string} str
 * @param {number} startIdx
 * @param {number} count
 * @returns {string}
 */
function subStr(str, startIdx, count) {
	// your code
}

// console.log(indexOfString('PDP BEST UNIVERSITY BEST OF THE BEST', 'BEST', 100)); // 4
console.log(lastIndexOfString('PDP BEST UNIVERSITY', 'E')); // 13
// console.log(sliceString('PDP BEST UNIVERSITY', 4, 13)); // BEST UNIVERSITY
// console.log(startsWithString('PDP BEST UNIVERSITY', 'PDP')); // true
// console.log(endsWithString('PDP BEST UNIVERSITY', 'UNIVERSITY')); // true
// console.log(subStr('PDP BEST UNIVERSITY', 4, 4)); // BEST

// let a = 'arslonbek bek bek';
// const idx = a.indexOf('bek', 7); // 10
