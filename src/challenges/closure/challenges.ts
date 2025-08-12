// console.log("======== CHALLENGE-1 ========");
// function makeGreeter(name: string, age: number) {
// 	return function () {
// 		console.log(`Hello, ${name}! I am ${age} years old.`);
// 	};
// }

// const greeter = makeGreeter("Nike", 20);
// greeter();

// console.log("======== CHALLENGE-2 ========");
// function createCounter() {
// 	let count = 0;

// 	return {
// 		increment() {
// 			count++;
// 		},
// 		get() {
// 			return count;
// 		},
// 	};
// }

// const c = createCounter();
// c.increment();
// c.increment();
// console.log(c.get());

// console.log("======== CHALLENGE-3 ========");
// function createBankAccount(initialBalance: number) {
// 	let balance = initialBalance;

// 	return {
// 		deposit(amount: number) {
// 			if (amount <= 0) return false;

// 			balance += amount;
// 			return true;
// 		},
// 		withdraw(amount: number) {
// 			if (amount > balance) return false;

// 			balance -= amount;
// 			return true;
// 		},
// 		getBalance() {
// 			return balance;
// 		},
// 	};
// }

// const account = createBankAccount(100);
// console.log(account.deposit(-50)); // false
// console.log(account.withdraw(50)); // true
// console.log(account.getBalance()); // 50
// console.log(account.withdraw(100)); // false
// console.log(account.getBalance()); // 50

console.log("======== CHALLENGE-4 ========");

function createHistory(n: number) {
	const histories: number[] = [];

	return {
		push(value: number) {
			histories.push(value);

			if (histories.length > n) histories.shift();
		},
		getHistories() {
			return histories;
		},
	};
}

const history = createHistory(3);
history.push(10, 40, 50, 70, 90, 110);
console.log(history.getHistories());
