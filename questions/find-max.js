console.log('-------FIND MAX------');

/**
 *
 * @param {string[]} items Array of strings
 * @return {number} Max number
 */
function findMax(items) {
	let max = -Infinity;

	for (const item of items) {
		let value = Number(item); // 22
		value = Number.isNaN(value) ? item.length : value;

		if (value > max) max = value;
	}

	return max;
}

console.log(findMax(['alic3', 'bob', '3', '4', '000000000']) === 5);
console.log(findMax(['bobur', '22', '15', 'arslonbek good boy']) === 22);
console.log(findMax(['pdp', 'pdp22', '14']) === 14);
console.log(findMax(['03', '02', 'pdp8']) === 4);
console.log(findMax(['abc', 'cccc', '6']) === 6);
console.log(findMax(['abc', 'bbb', 'cccc']) === 4);
console.log(findMax(['0000', '01', '10']) === 10);
