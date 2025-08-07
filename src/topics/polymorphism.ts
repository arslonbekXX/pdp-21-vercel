/* Polymorphism */
class Father {
	eat() {
		console.log("Father is eating");
	}
}

class Child extends Father {
	/* Method Overriding */
	eat() {
		console.log("Son is eating");
	}
}

const child = new Child();
console.log("child = ", child);
child.eat();
