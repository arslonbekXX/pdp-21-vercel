/* Challenge-1
Vazifa: Quyidagi foydalanuvchi obyektidan name, email, va age qiymatlarini ajratib oling.
 Ammo ularni yangi nom bilan oling (username, userEmail, userAge).
const user = {
  name: "Arslonbek",
  email: "arslonbek@example.com",
  age: 27,
  role: "admin"
};

*/

// const user = { name: 'Arslonbek', email: 'arslonbek@example.com', age: 27, role: 'admin' };

// const { name: username, email: userEmail, age: userAge, role: userRole } = user;

// console.log('username = ', username);
// console.log('userEmail = ', userEmail);
// console.log('userAge = ', userAge);
// console.log('userRole = ', userRole);

/**
	* 2. Array Destructuring + Skipping
Vazifa: Quyidagi massivdan faqat 2-chi va 4-chi elementni ajratib oling.

ts
Copy
Edit
const numbers = [10, 20, 30, 40, 50];
➡️ second = 20, fourth = 40 bo‘lishi kerak.
	*
 */

// const numbers = [10, 20, 30, 40, 50];
// const [, second, , fourth] = numbers;

// console.log('second = ', second);
// console.log('fourth = ', fourth);

/**
	* 3. Function with Rest Parameter
Vazifa: sumAll degan funksiya yozing, u har qanday uzunlikdagi sonlar qabul qilishi kerak va ularning yig‘indisini qaytaradi.

ts
Copy
Edit
sumAll(1, 2, 3); // 6
sumAll(5, 10, 15, 20); // 50
Hint: ...nums: number[] orqali rest parameter ishlatiladi.
	*
 */
// const sumAll = (...nums: number[]) => nums.reduce((a, c) => a + c);

// sumAll(10, 20, 30);
// sumAll(10, 20, 100);

/**
	* 4. Deep Destructuring in Nested Object + Optional Field
Vazifa: Quyidagi response obyektidan username, city, va postalCode ni ajrating. postalCode mavjud bo‘lmasligi mumkin.
➡️ Destructuring orqali username, city, va agar mavjud bo‘lsa postalCode oling.
	*
 */

// const response = {
// 	status: 'ok',
// 	data: {
// 		user: {
// 			username: 'arslonbek',
// 			address: {
// 				city: 'Tashkent',
// 				country: 'Uzbekistan',
// 				// postalCode: '100200',
// 			},
// 		},
// 	},
// };

// const { data } = response;
// const { user } = data;
// const { username, address } = user;
// const { city, postalCode } = address as { city: string; country: string; postalCode?: string };

// console.log('username	= ', username);
// console.log('city	= ', city);
// console.log('postalCode	= ', postalCode);

/**
	* 5. Array Spread + Filtering with Destructured Params
Vazifa: Quyidagi sonlar ro‘yxatidan 5 dan katta bo‘lgan elementlarni boshqa massivga nusxalang va qolganlari eski massivda qolsin. Bunda spread operatori va destructuring yordamida qiling.

ts
Copy
Edit

	*
 */

// let nums = [2, 5, 8, 1, 10, 4];
// const bigNums = [...nums.filter((num) => num > 5)];
// nums = [...nums.filter((num) => num <= 5)];

/*
6. Function Params Destructuring + Default Values + Types
Vazifa: createUser nomli funksiya yozing, u parametr sifatida quyidagicha obyekt qabul qiladi va destructuring qiladi:

ts
Copy
Edit
interface CreateUserInput {
  name: string;
  age?: number;
  role?: string;
}

createUser({ name: "Ali" })
// → age = 18 (default), role = "user" (default)
➡️ Type bilan birga age va role uchun default qiymat qo‘ying va destructuring ichida buni bajaring.


*/

// interface CreateUserInput {
// 	name: string;
// 	age?: number;
// 	role?: string;
// }

// function createUser({ name, age = 18, role = 'user' }: CreateUserInput) {
// 	return { name, age, role };
// }

// createUser({ name: 'Vali' }); // { name: 'Vali', age: 18, role: 'user' }
// createUser({ name: 'Sherlock', role: 'Teacher' }); // { name: 'Sherlock', age: 18, role: 'Teacher' }
// createUser({ name: 'Mark', age: 20, role: 'Developer' }); // { name: 'Mark', age: 20, role: 'Developer' }
