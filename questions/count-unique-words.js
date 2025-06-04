console.log('-------COUNT UNIQUE WORDS------');

/**
 * @param {string} text
 * @returns {number}
 */
function countUniqueWords(text) {}

console.log(countUniqueWords('hello world hello')); // 2  → "hello", "world"
console.log(countUniqueWords('The cat and the dog')); // 5  → "The", "cat", "and", "the", "dog"
console.log(countUniqueWords('Hi hello Hi')); // 2  → "Hi", "hello"
console.log(countUniqueWords('abc abc DEF def')); // 3  → "abc", "DEF", "def"
console.log(countUniqueWords('')); // 0  → bo‘sh matn
console.log(countUniqueWords('One ONE oNe')); // 3  → "One", "ONE", "oNe"
console.log(countUniqueWords('a b c d')); // 4  → "a", "b", "c", "d"
