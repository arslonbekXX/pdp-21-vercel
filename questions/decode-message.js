console.log('-------DECODE MESSAGE------');

/**
 * @param {string[]} codes
 * @param {string} message
 * @returns {string}
 */
function decodeMessage(codes, message) {}

console.log(decodeMessage(['a12', 'b3', 'c5'], 'abcde')); // '1235de'
console.log(decodeMessage(['x9', 'y2', 'z0'], 'xyzab')); // '920ab'
console.log(decodeMessage(['p100', 'q5'], 'pqrst')); // '1005rst'
console.log(decodeMessage(['a1', 'b2'], 'xyz')); // 'xyz'
console.log(decodeMessage([], 'hello')); // ''
console.log(decodeMessage(['h10', 'e5', 'l3'], 'hello')); // '10533o'
console.log(decodeMessage(['a5', 'b6', 'c7'], 'defg')); // 'defg'
