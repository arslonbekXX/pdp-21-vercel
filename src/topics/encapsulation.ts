/* Encapsulation */
class Person {
	constructor(public name: string, private mobile: string, protected car: string) {}
	useMobile() {
		console.log(`Using ${this.mobile} phone`);
	}
}

class Child extends Person {
	useCar() {
		console.log(`Using ${this.car} car`);
	}
}

/* Public test */
const person = new Person("John", "Iphone 15", "BMW");
console.log(person.name);

/* Private test */
person.useMobile();

/* Protected test */
const child = new Child("John", "Iphone 15", "BMW");
child.useCar();
