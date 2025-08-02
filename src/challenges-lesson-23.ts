// @ts-nocheck

// // 1. call yordamida boshqa obyektga method ulab chiqaring
// function greet(city) {
//  console.log(`${this.name} from ${city}`);
// }

// const person = { name: 'Asad' };

// greet.call(person, "Tashkent");

// console.log('Expected output:');
// // => Asad from Tashkent

// 2. bind yordamida this'ni bog‘lab funksiya yarating
// function say(msg) {
//  console.log(`${this.prefix} ${msg}`);
// }

// const context = { prefix: '[LOG]: ' };

// // 👇 bind ishlatib yangi funksiya yarating
// const logger = say.bind(context);
// logger('Hello');

// console.log('Expected output:');
// // => [LOG] Hello

// // 3. apply bilan obyektga methodni massiv argument bilan chaqiring
// function showInfo(job, country) {
// 	console.log(`${this.name} is a ${job} from ${country}`);
// }

// const user = { name: "Laylo" };
// const data = ["developer", "Uzbekistan"];

// // 👇 apply ishlatib chaqiring
// showInfo.apply(user, ["teacher", "russian", "go"]);
// showInfo.call(user, ...data);

// console.log("Expected output:");
// // => Laylo is a developer from Uzbekistan

// // 4. factory function orqali obyekt qaytaring, unga method qo‘shing
// function createUser(name, role) {
// 	// obyekt return qilsin va greet() methodiga ega bo‘lsin
// 	return {
// 		name,
// 		role,
// 		greet() {
// 			return `${this.name} is an ${this.role}`;
// 		},
// 	};
// }

// const u = createUser("Diyor", "admin");
// console.log(u.greet());

// console.log("Expected output:");
// // => Diyor is an admin

// 5. constructor function yordamida foydalanuvchi yarating
// function Person(name, age) {
// 	this.name = name;
// 	this.age = age;
// 	// this.say = function () {
// 	//    return `${this.name} is ${this.age} years old`;
// 	//   };
// }

// Person.prototype.say = function () {
// 	return `${this.name} is ${this.age} years old`;
// };

// const p = new Person("Malika", 21);
// const p1 = new Person("Asad", 22);

// console.log("p = ", p);
// console.log("p1 = ", p1);
// // => Malika is 21 years old

// // 6. bind orqali this'ni saqlab, setTimeout ichida ishlating
// const counter = {
// 	value: 0,
// 	increment() {
// 		console.log(++this.value);
// 	},
// };

// // 👇 increment funksiyani bind qilib, 1 soniyadan keyin chaqiring
// setTimeout(counter.increment.bind(counter), 1000);

// console.log('Expected output after 1s:');
// => 1

// 7. prototype orqali methodni ajdodga joylashtiring
// function Animal(type) {
// 	this.type = type;
// }

// // 👇 prototype ga method yozing
// Animal.prototype.sound = function () {
// 	return `${this.type} makes a sound`;
// };

// const a = new Animal('Cat');
// console.log(a.sound());

// console.log('Expected output:');
// => Cat makes a sound

// 8. Object.create bilan voris obyekt yarating
// const parent = {
// 	greet() {
// 		return `Hello from ${this.title}`;
// 	},
// };

// const child = Object.create(parent);
// child.title = 'Child';

// console.log(child.greet());

// console.log('Expected output:');
// => Hello from Child

// 9. prototype chaining orqali 3ta function bog‘lang
// function A() {}
// function B() {}
// function C() {}

// // 👇 B A dan, C B dan meros olsin
// B.prototype = Object.create(A.prototype);
// C.prototype = Object.create(B.prototype);

// const inst = new C();

// console.log(inst instanceof A);
// console.log(inst instanceof B);
// console.log(inst instanceof C);
// console.log('Expected output:');
// => true

// 10. proto va prototype farqini tekshiring
// function Developer(name) {
// 	this.name = name;
// }

// Developer.prototype.code = function () {
// 	return `${this.name} is coding`;
// };

// const dev = new Developer('Azamat');

// console.log(dev.__proto__ === Developer.prototype);
// console.log(Object.getPrototypeOf(dev) === Developer.prototype);

// console.log('Expected output:');
// // => true
// // => true

// try {
// } catch (error: any) {
// 	if (error instanceof Error) {
// 		console.log(error.message);
// 	}
// }
