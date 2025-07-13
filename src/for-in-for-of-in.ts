/* FOR:IN */

/* FOR:IN with ARRAY */
// const nums = [40, 30, 23, 50];
// for (const idx in nums) {
//  const value = nums[idx];
// 	console.log(Number(idx));
// 	console.log(`nums[${idx}] = `, value);
// }

/* FOR:IN with OBJECT */

// const laptop = {
// 	name: 'Macbook Pro',
// 	display: 'Retina',
// 	price: 2000,
// };

// for (const key in laptop) {
// 	const value = laptop[key as keyof typeof laptop];
// 	console.log(`laptop.${key} = `, value);
// }

/* IN */

// const person: any = { name: 'Kent', age: 20 };

// let isExistName = 'name' in person;
// let isExistAge = 'myAge' in person;

// console.log('isExistName = ', isExistName);
// console.log('isExistAge = ', isExistAge);

/* FOR:OF with ARRAY */
const nums = [40, 30, 23, 50];
nums.forEach((num) => console.log(num));
