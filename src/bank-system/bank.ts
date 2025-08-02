import type { Payment } from "./payment";
import type { User } from "./user";

export class Bank {
	name: string;
	users: User[] = [];
	payments: Payment[] = [];

	constructor(name: string) {
		this.name = name;
	}

	addUsers(...users: User[]) {
		this.users.push(...users);
	}

	processPayment(payment: Payment) {
		const isSended = payment.send();
		this.payments.push(payment);

		return isSended ? "Successfully payment" : "Failed payment";
	}
}
