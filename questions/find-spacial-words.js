console.log('-------FIND SPECIAL WORDS------');

// UNLI HARFLAR =

const vowels = ['a', 'e', 'i', 'o', 'u'];

/**
 * @param {string[]} words
 * @param {number} minLength
 * @param {number} vowelCount
 * @returns {string[]}
 */
function findSpecialWords(words, minLength, vowelCount) {
	return [];
}

console.log(findSpecialWords(['cat', 'hello', 'bird', 'tea'], 3, 2));
// ['hello', 'tea'] → 'hello' (5 harf, 2 unli), 'tea' (3 harf, 2 unli)

console.log(findSpecialWords(['apple', 'dog', 'eagle', 'pie'], 3, 2));
// ['apple', 'eagle'] → 'apple' (2 unli), 'eagle' (3 unli)

console.log(findSpecialWords(['rain', 'snow', 'ice'], 4, 1));
// ['rain', 'snow'] → 'rain' (4 harf, 2 unli), 'snow' (4 harf, 1 unli)

console.log(findSpecialWords(['a', 'be', 'foo', 'bar'], 3, 1));
// ['foo', 'bar'] → 'foo' (3 harf, 2 unli), 'bar' (3 harf, 1 unli)

console.log(findSpecialWords(['team', 'time', 'code'], 4, 2));
// ['team', 'time'] → 'team' (2 unli), 'time' (2 unli), 'code' (2 unli, lekin 'code' ham 4 harfli — bu ham to‘g‘ri bo‘lardi)

console.log(findSpecialWords(['hi', 'no', 'yes'], 3, 1));
// ['yes'] → 'yes' (3 harf, 1 unli)

console.log(findSpecialWords([], 5, 3));
// [] → bo‘sh massiv
