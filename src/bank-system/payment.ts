import type { User } from "./user";

export type Status = "PENDING" | "COMPLETED" | "FAILED";

export class Payment {
	from: User;
	to: User;
	amount: number;
	status: Status;

	constructor(from: User, to: User, amount: number) {
		this.from = from;
		this.to = to;
		this.amount = amount;
		this.status = "PENDING";
	}

	send() {
		if (this.from.balance >= this.amount) {
			this.from.addMoney(-this.amount);
			this.to.addMoney(this.amount);
			this.status = "COMPLETED";
			return true;
		} else {
			this.status = "FAILED";
			return false;
		}
	}

	getDetails() {
		return `From: ${this.from.name}, To: ${this.to.name}, Amount: ${this.amount}, Status: ${this.status}, From Balance: ${this.from.balance}, To Balance: ${this.to.balance}`;
	}
}
