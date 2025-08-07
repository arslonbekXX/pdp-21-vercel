import type { Card } from "./card";

abstract class BankMethods {
	public abstract addCard(card: Card): void;
	public abstract getCardByNumber(number: string): Card;
	public abstract transfer(fromCard: Card, toCard: Card, amount: number): void;
	public abstract calculateTotalBalance(): number;
}

export class Bank extends BankMethods {
	constructor(
		private name: string,
		public bankCode: string,
		private cards: Card[],
		private totalBalance: number,
		private transactionFee: number
	) {
		super();
	}

	addCard(card: Card): void {
		throw new Error("Method not implemented.");
	}

	getCardByNumber(number: string): Card {
		throw new Error("Method not implemented.");
	}

	transfer(fromCard: Card, toCard: Card, amount: number): void {
		throw new Error("Method not implemented.");
	}

	calculateTotalBalance(): number {
		throw new Error("Method not implemented.");
	}
}
