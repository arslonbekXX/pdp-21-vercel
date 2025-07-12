/* Object Destructuring */
// const animal = {
// 	name: 'Reks',
// 	type: 'Dog',
// 	color: 'Brown',
// 	age: 5,
// };

// // const name = animal.name;
// // const type = animal.type;
// // const color = animal.color;
// // const dogAge = animal.age;

// const { name, type, color, age: dogAge } = animal;

// console.log('name = ', name);
// console.log('type = ', type);
// console.log('color = ', color);
// console.log('age = ', dogAge);

/* Array Destructuring */
// const words = ['Hello', 'World', 'JavaScript', 'is', 'awesome'];

// const a = words[0];
// const b = words[1];
// const c = words[2];
// const d = words[3];
// const e = words[4];
// const [a, b, c, d, e] = words;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

/* Challenge-1 */
const cart = {
	maxMoney: 10000,
	products: [
		{ name: 'Laptop', price: 800 },
		{ name: 'Phone', price: 500 },
		{ name: 'Tablet', price: 300 },
		{ name: 'Headphones', price: 150 },
		{ name: 'Smartwatch', price: 200 },
		{ name: 'Camera', price: 600 },
		{ name: 'Printer', price: 250 },
		{ name: 'Monitor', price: 400 },
		{ name: 'Keyboard', price: 100 },
		{ name: 'Mouse', price: 50 },
	],
};

const { maxMoney, products } = cart;
let totalPrice = 0;

for (const { price } of products) {
	totalPrice += price;
}

if (maxMoney >= totalPrice) {
	for (const { name, price } of products) {
		console.log(`${name} : $${price}`);
	}
	console.log(`Total price: $${totalPrice}`);
} else {
	console.log(`You cannot buy all products!`);
}
