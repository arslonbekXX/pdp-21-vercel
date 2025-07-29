// @ts-nocheck
const person1 = {
	name: "Kent",
	age: 30,
	height: 180,
	weight: 70,
	gender: "male",
	nationality: "American",
};
const person2 = {
	name: "Mark",
	age: 40,
	height: 170,
	weight: 80,
	gender: "male",
	nationality: "Polish",
};
const person3 = {
	name: "John",
	age: 25,
	height: 175,
	weight: 75,
	gender: "male",
	nationality: "British",
};
// ...
const person100 = {
	name: "Jane",
	age: 20,
	height: 160,
	weight: 60,
	gender: "female",
	nationality: "Canadian",
};

const methods = {
	run() {
		console.log(`${this.name} is running...`);
	},
	jump() {
		console.log(`${this.name} is jumping...`);
	},
	write() {
		console.log(`${this.name} is writing...`);
	},
};

console.log("------- RUN -------");
methods.run.call(person1);
methods.run.call(person2);
methods.run.call(person3);
methods.run.call(person100);

console.log("------- JUMP -------");
methods.jump.call(person1);
methods.jump.call(person2);
methods.jump.call(person3);
methods.jump.call(person100);

console.log("------- WRITE -------");
methods.write.call(person1);
methods.write.call(person2);
methods.write.call(person3);
methods.write.call(person100);
