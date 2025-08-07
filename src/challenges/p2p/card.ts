import type { Transaction } from "./types";

abstract class CardMethods {
	abstract deposit(amount: number): void;
	abstract withdraw(amount: number): void;
	abstract changePin(newPin: number): void;
	abstract block(): void;
	abstract activate(): void;
	abstract canSpend(amount: number): boolean;
}

export class Card extends CardMethods {
	constructor(
		private number: string,
		private expiryDate: string,
		private holderName: string,
		private cvv: number,
		private balance: number,
		private pin: number,
		private isActive: boolean,
		private cardType: string,
		private dailyLimit: number,
		private monthlySpent: number,
		private transactionHistory: Transaction[]
	) {
		super();
	}

	deposit(amount: number): void {
		throw new Error("Method not implemented.");
	}
	withdraw(amount: number): void {
		throw new Error("Method not implemented.");
	}
	changePin(newPin: number): void {
		throw new Error("Method not implemented.");
	}
	block(): void {
		throw new Error("Method not implemented.");
	}
	activate(): void {
		throw new Error("Method not implemented.");
	}

	canSpend(amount: number): boolean {
		throw new Error("Method not implemented.");
	}

	getNumber() {
		return this.number;
	}

	setNumber(number: string) {
		this.number = number;
	}

	getExpiryDate() {
		return this.expiryDate;
	}

	setExpiryDate(expiryDate: string) {
		this.expiryDate = expiryDate;
	}

	getHolderName() {
		return this.holderName;
	}

	setHolderName(holderName: string) {
		this.holderName = holderName;
	}

	getCvv() {
		return this.cvv;
	}

	setCvv(cvv: number) {
		this.cvv = cvv;
	}

	getBalance() {
		return this.balance;
	}

	setBalance(balance: number) {
		this.balance = balance;
	}

	getPin() {
		return this.pin;
	}

	setPin(pin: number) {
		this.pin = pin;
	}

	getIsActive() {
		return this.isActive;
	}

	setIsActive(isActive: boolean) {
		this.isActive = isActive;
	}

	getCardType() {
		return this.cardType;
	}

	setCardType(cardType: string) {
		this.cardType = cardType;
	}

	getDailyLimit() {
		return this.dailyLimit;
	}

	setDailyLimit(dailyLimit: number) {
		this.dailyLimit = dailyLimit;
	}

	getMonthlySpent() {
		return this.monthlySpent;
	}

	setMonthlySpent(monthlySpent: number) {
		this.monthlySpent = monthlySpent;
	}

	getTransactionHistory() {
		return this.transactionHistory;
	}

	setTransactionHistory(transaction: string) {
		this.transactionHistory.push(transaction);
	}
}
