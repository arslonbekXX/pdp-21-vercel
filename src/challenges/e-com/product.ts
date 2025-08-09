import { faker } from "@faker-js/faker";
enum CATEGORY {
	ELECTRONICS = "ELECTRONICS",
	CLOTHING = "CLOTHING",
	BOOKS = "BOOKS",
	FOOD = "FOOD",
}

export class Product {
	private id: string;
	constructor(
		private name: string,
		private price: number,
		private stock: number,
		private category: CATEGORY
	) {
		this.id = faker.string.uuid();
	}

	getId() {
		return this.id;
	}

	getName() {
		return this.name;
	}

	getPrice() {
		return this.price;
	}

	getStock() {
		return this.stock;
	}

	getCategory() {
		return this.category;
	}

	updatePrice(newPrice: number) {
		this.price = newPrice;
	}
	addStock(quantity: number) {
		this.stock += quantity;
	}
	reduceStock(quantity: number) {
		this.stock -= quantity;
	}
	isAvailable() {
		return this.stock > 0;
	}
}
