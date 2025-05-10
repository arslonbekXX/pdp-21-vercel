console.log('-------SUM------');

/**
 * @param {number[]} nums Array of numbers
 * @param {string[]} operations Array of operations
 * @return {number} Result of operations
 */
function sum(nums, operations) {
	if (operations.length === 0 || nums.length <= 1) return 0;

	let statement = `${nums[0]}`; // 4 + 4 - 1

	for (let i = 1; i < nums.length; i++) {
		const num = nums[i]; // 1
		const operation = operations[i - 1]; // -

		statement += ` ${operation} ${num}`;
	}

	return eval(statement);
}

console.log(sum([4, 4, 1], ['+', '-', '*']) === 7); // 4 + 4 - 1 -> 7
console.log(sum([1, 1], []) === 0); // 0
console.log(sum([1], ['*', '/', '+']) === 0); // 0
console.log(sum([4, 5, 5, 5], ['*', '*', '/']) === 20); // 4 * 5 * 5 / 5 -> 20
console.log(sum([5, 4], ['*', '*', '/']) === 20); // 5 * 4 * 4 / 5 -> 20
console.log(sum([3, 3], ['-', '*', '/']) === 0); // 3 - 3 * 3 / 3 -> 0
