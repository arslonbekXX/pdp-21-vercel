// @ts-nocheck

function User(name, phone, balance) {
	this.name = name;
	this.phone = phone;
	this.balance = balance;
}

User.prototype.addMoney = function (amount) {
	this.balance += amount;
	return this.balance;
};

User.prototype.getInfo = function () {
	const balance = this.balance;

	return `${this.name} - ${this.phone} - $${this.balance}`;
};

function Payment(from, to, amount) {
	this.from = from;
	this.to = to;
	this.amount = amount;
	this.status = 'PENDING';
}

Payment.prototype.send = function () {
	if (this.from.balance >= this.amount) {
		this.from.balance -= this.amount;
		this.to.balance += this.amount;
		this.status = 'COMPLETED';
		return true;
	} else {
		this.status = 'FAILED';
		return false;
	}
};

Payment.prototype.getDetails = function () {
	return `${this.from.name} → ${this.to.name}: $${this.amount} (${this.status.toLowerCase()})`;
};

function Bank(name) {
	this.name = name;
	this.users = [];
	this.payments = [];
}

Bank.prototype.addUser = function (...users) {
	return this.users.push(...users);
};

Bank.prototype.processPayment = function (payment) {
	const isSended = payment.send();
	this.payments.push(payment);
	const message = isSended ? 'Successfully payment' : 'Failed payment';

	return message;
};

const user1 = new User('Kent', '+998998961348', 10000);
const user2 = new User('Mark', '+998991234567', 20000);

console.log(user1.getInfo());
console.log(user2.getInfo());

const payment1 = new Payment(user1, user2, 5000);
const payment2 = new Payment(user2, user1, 6000);

console.log(payment1.getDetails());
console.log(payment2.getDetails());

const bank = new Bank('IMAN INVEST');
bank.addUser(user1, user2);

bank.processPayment(payment1);
bank.processPayment(payment2);

console.log(payment1.getDetails());
console.log(payment2.getDetails());

console.log(user1.getInfo());
console.log(user2.getInfo());
