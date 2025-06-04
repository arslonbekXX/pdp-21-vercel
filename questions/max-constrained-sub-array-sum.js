console.log('-------MAX CONSTRAINED SUB ARRAY SUM------');

/**
 * @param {number[]} nums
 * @param {number} k - Maksimal uzunlik chegarasi
 * @param {number} minValue - Minimal qiymat chegarasi
 * @return {number}
 */
function maxConstrainedSubArraySum(nums, k, minValue) {}

console.log(maxConstrainedSubArraySum([1, 2, 3, 4, 5], 2, 3)); // 9
console.log(maxConstrainedSubArraySum([5, -2, 3, 1, 8], 3, 2)); // 11
console.log(maxConstrainedSubArraySum([-1, 3, -2, 4, 5], 2, 0)); // 9
console.log(maxConstrainedSubArraySum([10, -5, 20, 30, 5], 3, 10)); // 50
console.log(maxConstrainedSubArraySum([1, 2, -3, 4, -5], 4, 3)); // 4
console.log(maxConstrainedSubArraySum([-1, -2, -3], 2, 0)); // 0
console.log(maxConstrainedSubArraySum([15, 12, 8, 20, 10], 3, 10)); // 42
