// @ts-nocheck
const prototype = {
	text: "I am a prototype",
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

function createPerson(name, age, height, weight, gender, nationality) {
	const person = Object.create(prototype); // {}
	person.name = name; // { name: string }
	person.age = age; // { name: string, age: number }
	person.height = height; // { name: string, age: number, height: number }
	person.weight = weight; // { name: string, age: number, height: number, weight: number }
	person.gender = gender; // { name: string, age: number, height: number, weight: number, gender: string }
	person.nationality = nationality; // { name: string, age: number, height: number, weight: number, gender: string, nationality: string }

	return person;
}

const person1 = createPerson("Kent", 30, 180, 70, "male", "American");
const person2 = createPerson("Mark", 40, 170, 80, "male", "Polish");
const person3 = createPerson("John", 25, 175, 75, "male", "British");
const person100 = createPerson("Jane", 20, 160, 60, "female", "Canadian");

console.log(person1.text);
console.log(person2.text);

// console.log("------- RUN -------");
// person1.run(); // HM_0001.HM_0002()
// person2.run(); // HM_0003.HM_0002()
// person3.run(); // HM_0004.HM_0002()
// person100.run(); // HM_0005.HM_0002()

// console.log("------- JUMP -------");
// person1.jump();
// person2.jump();
// person3.jump();
// person100.jump();

// console.log("------- WRITE -------");
// person1.write();
// person2.write();
// person3.write();
// person100.write();
