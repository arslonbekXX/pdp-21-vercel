// /* Constructor Function */
// function Animal(name: string) {
// 	this.name = name;
// }

// Animal.prototype.eat = function () {
// 	console.log(`${this.name} is eating...`);
// };

// function Dog(name: string) {
// 	Animal.call(this, name);
// }

// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;
// Dog.prototype.bark = function () {
// 	console.log(`${this.name} is barking... `);
// };

// function Cat(name: string) {
// 	Animal.call(this, name);
// }

// Cat.prototype = Object.create(Animal.prototype);
// Cat.prototype.constructor = Cat;
// Cat.prototype.meow = function () {
// 	console.log(`${this.name} is meowing... `);
// };

// const dog = new Dog("Reks");
// dog.eat();
// dog.bark();

// const cat = new Cat("Koshka");
// cat.eat();
// cat.meow();

/* Class */

class Animal {
	constructor(public name: string) {}

	eat() {
		console.log(`${this.name} is eating...`);
	}
}

class Dog extends Animal {
	bark() {
		console.log(`${this.name} is barking... `);
	}
}

class Cat extends Animal {
	meow() {
		console.log(`${this.name} is meowing... `);
	}
}

const dog = new Dog("Reks");
dog.eat();
dog.bark();

const cat = new Cat("Koshka");
cat.eat();
cat.meow();
