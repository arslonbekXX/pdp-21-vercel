console.log('-------SUM IN RANGE------');

/**
 * @param {Object} data
 * @param {number} startRange
 * @param {number} endRange
 * @returns {number}
 */
function sumInRange(data, startRange, endRange) {}

console.log(sumInRange({ a: 5, ab: 10, abc: 15 }, 5, 12) === 15); // ✅ 5 va 10 oraliqda → 5 + 10 = 15
console.log(sumInRange({ cat: 20, dog: 8, fish: 5 }, 6, 10) === 8); // ✅ faqat 8 mos keladi
console.log(sumInRange({ x: 1, xy: 2, xyz: 3 }, 5, 10) === 0); // ✅ hech biri 5–10 oraliqda emas
console.log(sumInRange({ abc: 7, defg: 15, xy: 8 }, 7, 20) === 30); // ✅ 7 + 15 + 8 = 30
console.log(sumInRange({}, 1, 5) === 0); // ✅ bo‘sh obyekt, natija 0
console.log(sumInRange({ test: 3, ok: 12, no: 0 }, 5, 10) === 0); // ✅ hech biri 5–10 oraliqda emas
