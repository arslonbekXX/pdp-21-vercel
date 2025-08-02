export class User {
	name: string;
	phone: string;
	balance: number;

	constructor(name: string, phone: string, balance: number) {
		this.name = name;
		this.phone = phone;
		this.balance = balance;
	}

	getInfo() {
		return `Name: ${this.name}, Phone: ${this.phone}, Balance: ${this.balance}`;
	}

	addMoney(amount: number) {
		this.balance += amount;
		return this.balance;
	}
}
