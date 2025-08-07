/* Getters and Setters */
class Card {
	constructor(private balance: number) {}

	getBalance() {
		return this.balance;
	}

	setBalance(amount: number) {
		this.balance = amount;
	}
}

const card = new Card(10000);
console.log(card.getBalance()); // card.balance()
card.setBalance(20000); // card.balance(20000)
console.log(card.getBalance());
