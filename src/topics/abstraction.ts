abstract class Job {
	constructor(protected name: string, protected uniform: string) {}
	abstract run(): void;
	abstract jump(): void;
	eat() {
		console.log(`${this.name} is eating...`);
	}
}

class Doctor extends Job {
	run(): void {
		console.log(`Doctor ${this.name} is running with ${this.uniform}...`);
	}
	jump(): void {
		console.log(`Doctor ${this.name} is jumping with ${this.uniform}...`);
	}
}

class Developer extends Job {
	run(): void {
		console.log(`Developer ${this.name} is running with ${this.uniform}...`);
	}
	jump(): void {
		console.log(`Developer ${this.name} is jumping with ${this.uniform}...`);
	}
	walk() {}
}

const doctor = new Doctor("Kent", "White coat");
doctor.run();
doctor.jump();
doctor.eat();

const developer = new Developer("Mark", "Black t-shirt");
developer.run();
developer.jump();
developer.eat();
