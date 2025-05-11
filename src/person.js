const person = {
	firstName: 'Kent',
	lastName: 'Mark',
	age: 23,
	getFullName() {
		return `${this.firstName} ${this.lastName}`;
	},
	celebrateBirthday() {
		this.age++;
	},
	introduce() {
		const message = `Hi, my name is ${this.getFullName()} and I am ${this.age} years old.`;

		console.log(message);
	},
};

person.celebrateBirthday(); // 24
person.introduce();
