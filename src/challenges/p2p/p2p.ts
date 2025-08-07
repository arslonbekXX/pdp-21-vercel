import type { Bank } from "./bank";
import type { Card } from "./card";
import type { Transaction } from "./types";

abstract class P2PMethods {
	public abstract registerBank(bank: Bank): void;
	public abstract send(fromCard: Card, toCard: Card, amount: number): void;
	public abstract validateTransaction(fromCard: Card, toCard: Card, amount: number): void;
	public abstract calculateFee(amount: number): void;
}

export class P2P extends P2PMethods {
	constructor(
		private supportedBanks: Bank[],
		private transactionHistory: Transaction[],
		private dailyTransactionLimit: number,
		private serviceFee: number
	) {
		super();
	}

	public registerBank(bank: Bank): void {
		throw new Error("Method not implemented.");
	}
	public send(fromCard: Card, toCard: Card, amount: number): void {
		throw new Error("Method not implemented.");
	}
	public validateTransaction(fromCard: Card, toCard: Card, amount: number): void {
		throw new Error("Method not implemented.");
	}
	public calculateFee(amount: number): void {
		throw new Error("Method not implemented.");
	}
}
