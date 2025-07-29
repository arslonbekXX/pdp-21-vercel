// @ts-nocheck
const person1 = {
	name: "Kent",
	age: 30,
	height: 180,
	weight: 70,
	gender: "male",
	nationality: "American",
	run() {
		console.log(`${this.name} is running...`);
	},
};
const person2 = {
	name: "Mark",
	age: 40,
	height: 170,
	weight: 80,
	gender: "male",
	nationality: "Polish",
	run() {
		console.log(`${this.name} is running...`);
	},
};
const person3 = {
	name: "John",
	age: 25,
	height: 175,
	weight: 75,
	gender: "male",
	nationality: "British",
	run() {
		console.log(`${this.name} is running...`);
	},
};
// ...
const person100 = {
	name: "Jane",
	age: 20,
	height: 160,
	weight: 60,
	gender: "female",
	nationality: "Canadian",
	run() {
		console.log(`${this.name} is running...`);
	},
};

person1.run();
person2.run();
person3.run();
person100.run();
