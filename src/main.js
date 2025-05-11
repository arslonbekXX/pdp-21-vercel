/* Stack memory with primitive types */
// let a = 'arslonbek'; // SM_a_001 = "arslonbek"
// let b = a; // SM_b_002 = "jamshidbek";
// b = 'jamshidbek';

// console.log(a);
// console.log(b);

/* Stack memory with reference types */
/*
 * HM (Heap Memory)
 *   address       |      value
 *   ------------  |  ------------
 *       0001      |  ['murod', HM_0002]
 *       0002      |  ['asad']
 *
 */
// const students = ['murod', ['asad']]; // SM_students_001 = HM_0001
// const students2 = students; // SM_students2_002 = HM_0001

// students2[students2.length] = 'jamshidbek'; // HM_0001[2] = 'jamshidbek'
// console.log(students); // HM_0001
// console.log(students2); // HM_0001

// /** Array */
// const user1 = ['kent mark', 24, 'New york', '+711-22-22', 2000];

// console.log('[Array] name = ', user1[0]);
// console.log('[Array] age = ', user1[1]);
// console.log('[Array] address = ', user1[2]);
// console.log('[Array] phone = ', user1[3]);
// console.log('[Array] salary = ', user1[4]);

// /** Object */
// const user2 = {
// 	name: 'kent mark',
// 	age: 24,
// 	address: 'USA',
// 	phone: '+711-22-22',
// 	salary: 2000,
// };

// /* Array vs Object */
// console.log('[Object] name = ', user2.name);
// console.log('[Object] age = ', user2.age);

/* How to create object */
/*
 * HM (Heap Memory)
 *   address       |      value
 *   ------------  |  ------------
 *   0001          |  { name: "apple", price: 1000, amount: 10, price: 2000, address: HM_0002 }
 *   0002          |  { state: "USA", city: "New york" }
 */
// const product = {
// 	name: 'apple',
// 	price: 1000,
// 	amount: 10,
// 	price: 2000,
// 	address: {
// 		state: 'USA',
// 		city: 'New york',
// 	},
// };

// product['color'] = 'green';
// product.amount = 200;

// console.log(product);

/* How to access object properties */
// const product = {
// 	name: 'apple',
// 	price: 2000,
// 	address: {
// 		state: 'USA',
// 		city: 'New york',
// 	},
// };

/* Dot notation */
// console.log(product.price);
// console.log(product.address.state);
// console.log(product.address['city']);

/* Bracket notation */
// const key = 'name';
// console.log(product[key]);
// console.log(product['address']);

/* How to add new properties to object */
// const item = { name: 'Iphone', price: 1000 };
// item.color = 'Black';
// const keyNAME = 'type';
// item[keyNAME] = 'IPHONE 15 PRO MAX';

// console.log(item);

/* How to delete properties from object */
// const item = { name: 'Iphone', price: 1000, model: 'IPHONE 15 PRO MAX' };
// delete item.price;

// const deleteKeyName = 'model';
// delete item[deleteKeyName];

// console.log(item);

/* How to check if property exists in object */
// const item = {
// 	name: 'Macbook',
// 	price: 1000,
// 	color: 'Black',
// };

/* Simple way(with if statement) */
// if (item.color) {
// 	console.log('[IF] color = ', item.color);
// }

// /* Advanced way(with in operator) */
// if ('color' in item) {
// 	console.log('[IN] color = ', item.color);
// }

/*How to iterate over object properties */
/* For of loop (Array) */
// console.log('-------FOR OF LOOP (Array)-------');
// const numbers = [10, 20, 50];
// for (const num of numbers) {
// 	console.log('num = ', num);
// }

// /* For in loop (Object) */
// console.log('-------FOR IN LOOP (Object)-------');
// const item = { name: 'Macbook', color: 'Yellow' };
// for (const key in item) {
// 	const value = item[key];
// 	console.log(`${key} = `, value);
// }

/* Object methods */
// const person = {
// 	name: 'John',
// 	run() {
// 		console.log(`${this.name} is running...`);
// 	},
// 	jump() {
// 		console.log(`${this.name} is jumping...`);
// 	},
// 	move() {
// 		console.log(`${this.name} is moving...`);
// 	},
// };

// person.run();
// person.jump();
// person.move();



