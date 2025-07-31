// @ts-nocheck

// /* Constructor Function */
// function Box(name, color) {
// 	this.name = name;
// 	this.color = color;

// 	return this;
// }

// Box.prototype.run = function () {
// 	console.log(`${this.name} is running...`);
// };

// Box.prototype.jump = function () {
// 	console.log(`${this.name} is jumping...`);
// };

// Box.prototype.length = 10;

// const box1 = new Box("box1", "red");
// const box2 = new Box("box2", "blue");

// function Car(name, color, price) {
// 	this.name = name;
// 	this.color = color;
// 	this.price = price;
// }

// Car.prototype.start = function () {
// 	console.log(`${this.name} is starting...`);
// };

// Car.prototype.stop = function () {
// 	console.log(`${this.name} is stopping...`);
// };

// console.log("car prototype = ", Car.prototype);

// function Tesla(name, color, price, model, capacity) {
// 	Car.call(this, name, color, price);

// 	this.model = model;
// 	this.capacity = capacity;

// 	return this;
// }

// Tesla.prototype = Object.create(Car.prototype); // {}
// Tesla.prototype.charge = function () {
// 	console.log(`${this.name} ${this.model} is charging...`);
// };
// Tesla.prototype.display = function () {
// 	console.log(`${this.name} ${this.model} is displaying...`);
// };
// console.log("tesla prototype = ", Tesla.prototype);

// const tesla1 = new Tesla("Tesla", "Black", 80000, "Model-S", 50000);
// const tesl2 = Tesla.call(Object.create(Tesla.prototype), "Tesla", "Black", 80000, "Model-S", 50000);
// console.log(tesla1);
// console.log(tesl2);

function Phone(name) {
	this.name = name;
}

Phone.prototype.photo = function () {
	console.log(`${this.brand}'s ${this.name} is taking photo...`);
};

function Iphone(name, brand) {
	Phone.call(this, name);
	this.brand = brand;
}
Iphone.prototype = Object.create(Phone.prototype); // {}
Iphone.prototype.constructor = Iphone;
Iphone.prototype.record = function () {
	console.log(`${this.brand}'s ${this.name} is recording...`);
};

const iphone = new Iphone("Iphone 16 Pro Max", "Apple");

iphone.photo();
iphone.record();

/* Challenge-1:
1. Create a constructor function for a Computer (name: string, cpu: string, isOn: boolean, switch: () => void)
2. Create a constructor function for a Laptop (memory: string, brand: string, open: () => void, close: () => void)
3. Create a constructor function for a PC (brand: string, freeze: () => void)
3. Create a object from Laptop for a "M1 Macbook Pro"
4. Create a object from PC for a "Dell"

*/

function Computer(name, cpu) {
	this.name = name;
	this.cpu = cpu;
	this.isOn = false;
}

function Laptop(name, cpu, memory, brand) {}
function PC(name, cpu, brand) {}

const laptop = new Laptop("Macbook Pro", "M1", "1TB", "Apple");
const pc = new PC("Dell Gaming 1", "Intel Core-i9", "Dell");
