console.log('-------SUM------');

/**
 * @param {number[]} nums Array of numbers
 * @param {string[]} operations Array of operations
 * @return {number} Result of operations
 */
function sum(nums, operations) {}

console.log(sum([4, 4, 1], ['+', '-', '*']) === 7); // 4 + 4 - 1 -> 7
console.log(sum([1, 1], []) === 0); // 0
console.log(sum([1], ['*', '/', '+']) === 0); // 0
console.log(sum([4, 5, 5, 5], ['*', '*', '/']) === 20); // 4 * 5 * 5 / 5 -> 20
console.log(sum([5, 4], ['*', '*', '/']) === 20);
console.log(sum([3, 3], ['-', '*', '/']) === 0);
