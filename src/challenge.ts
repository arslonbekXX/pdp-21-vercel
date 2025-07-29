// @ts-nocheck

/**
 * challenge-1:
 * 1. Bizga car object ni yaratib beradigan createCar nomli factory function yarating
 * 2. Car objectining propertiesi:
 * 	- brand: string
 * 	- model: string
 * 	- year: number
 * 	- color: string
 * 	- price: number
 * 3. Car objectining methodsi:
 * 	- start() { console.log(`${this.brand} ${this.model} is starting...`); }
 * 	- stop() { console.log(`${this.brand} ${this.model} is stopping...`); }
 * 4. Car objectining methodlarini prototypega o'rnating
 * 5. Kamida 3 ta car yaratib, ularni methodlarini ishlatishga harakat qiling
 */

const prototype = {
	start() {
		if (this.isStarted) throw new Error(`${this.brand} ${this.model} is already started`);

		this.isStarted = true;
		console.log(`${this.brand} ${this.model} is starting...`);
	},
	stop() {
		if (!this.isStarted) throw new Error(`${this.brand} ${this.model} is not started`);

		this.isStarted = false;
		console.log(`${this.brand} ${this.model} is stopping...`);
	},
};

function createCar(brand, model, year, color, price) {
	const car = Object.create(prototype);
	car.brand = brand;
	car.model = model;
	car.year = year;
	car.color = color;
	car.price = price;
	car.isStarted = false;

	return car;
}

const car1 = createCar("BMW", "X5", 2024, "black", 100000);
const car2 = createCar("Mercedes", "C-Class", 2023, "white", 80000);
const car3 = createCar("Audi", "A4", 2022, "red", 60000);
try {
	car1.start();
	car1.start();
	car2.start();
	car3.start();
	car1.stop();
} catch (error: any) {
	if (error instanceof Error) {
		console.error(error.message);
	}
}
