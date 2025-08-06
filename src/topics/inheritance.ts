// // @ts-nocheck

// /* Constructor Function */
// function Phone(name) {
// 	this.name = name;
// }
// Phone.prototype.call = function () {
// 	console.log(`${this.name} is Calling...`);
// };

// function Iphone(name) {
// 	Phone.call(this, name);
// }
// Iphone.prototype = Object.create(Phone.prototype); // {}
// Iphone.prototype.constructor = Iphone;
// Iphone.prototype.capacity = function () {
// 	console.log(`${this.name} has 100% capacity`);
// };

// function Samsung(name) {
// 	Phone.call(this, name);
// }
// Samsung.prototype = Object.create(Phone.prototype);
// Samsung.prototype.constructor = Samsung;
// Samsung.prototype.zoom = function () {
// 	console.log(`${this.name} has 100x zoom`);
// };

// const phone = new Phone("Nokia");
// const iphone = new Iphone("Iphone 11");
// const samsung = new Samsung("Samsung Galaxy S20");

// phone.call();
// iphone.call();
// samsung.call();

// iphone.capacity();
// samsung.zoom();

class Phone {
	name: string;
	memory: number;
	constructor(name: string, memory: number) {
		this.name = name;
		this.memory = memory;
	}

	call() {
		console.log(`${this.name} is Calling...`);
	}
}

class Iphone extends Phone {
	ios: string;
	constructor(name: string, memory: number, ios: string) {
		super(name, memory);
		this.ios = ios;
	}

	capacity() {
		console.log(`${this.name} has 100% capacity`);
	}
}

class Samsung extends Phone {
	oneUI: string;
	constructor(name: string, memory: number, oneUI: string) {
		super(name, memory);
		this.oneUI = oneUI;
	}
	zoom() {
		console.log(`${this.name} has 100x zoom`);
	}
}

console.log("------------NOKIA------------");
const nokia = new Phone("Nokia 6700", 128);
console.log("nokia = ", nokia);
nokia.call();

console.log("------------IPHONE------------");
const iphone = new Iphone("Iphone 11", 1000, "15.0");
console.log("iphone = ", iphone);
iphone.call();
iphone.capacity();

console.log("------------SAMSUNG------------");
const samsung = new Samsung("Samsung Galaxy S20", 1200, "2.0");
console.log("samsung = ", samsung);
samsung.call();
samsung.zoom();
