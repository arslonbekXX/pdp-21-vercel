// const a = -8.5;

// console.log('a =', a);
/* Math.floor() */
// console.log('Math.floor(a) =', Math.floor(a));

/* Math.ceil() */
// console.log('Math.ceil(a) =', Math.ceil(a));

/* Math.round() */
// console.log('Math.round(a) =', Math.round(a));

/* Math.abs() */
// console.log('Math.abs(a) =', Math.abs(a)); //

/* Math.max() */
// console.log('Math.max(a) =', Math.max(10, 25, 100, 1000, 105));

/* Math.min() */
// console.log('Math.min(a) =', Math.min(10, -25, 100, 1000, 105));

/* Math.random() */
// console.log('Math.random() =', Math.random());

/* Challenge 1 */
// const users = ['code', 'apps', 'need', 'nick', 'niko', 'appo', 'uppo', 'popo'];
// const randomIdx = Math.floor(Math.random() * users.length);
// const randomUser = users[randomIdx];
// console.log('randomUser = ', randomUser);

/**
 *
 * @param {string} str
 * @param {string} search
 * @param {string} input
 * @returns {string}
 */
function replaceAll(str, search, input) {
	let result = '';
	for (let i = 0; i < str.length; i++) {
		let sub = str.substring(i, search.length);

		if (sub === search) {
			result += input;
			i += search.length - 1;
		} else {
			result += str[i];
		}
	}

	return result;
}

console.log(replaceAll('Hello World', 'Hello', 'a')); // Hella warld
