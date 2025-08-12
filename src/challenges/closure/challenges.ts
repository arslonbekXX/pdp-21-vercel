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

// console.log("======== CHALLENGE-4 ========");
// function createHistory(n: number) {
// 	const histories: number[] = [];

// 	return {
// 		push(...args: number[]) {
// 			histories.push(...args);

// 			const diff = histories.length - n;
// 			if (diff > 0) histories.splice(0, diff);
// 		},
// 		getHistories: () => histories,
// 	};
// }

// const history = createHistory(3);
// history.push(10, 40, 50, 70, 90, 110);
// console.log(history.getHistories());

// console.log("======== CHALLENGE-6 ========");
// function once(fn: any) {
// 	let result: number;
// 	return function () {
// 		if (result) return result;
// 		result = fn();
// 		return result;
// 	};
// }

// let i = 0;
// const f = once(() => ++i);
// console.log(f()); // 1
// console.log(f()); // 1
// console.log(f()); // 1
// console.log(f()); // 1

// console.log("======== CHALLENGE-7 ========");

// const slow = (n: number) => n * 2;

// function memoize(fn: (n: number) => number) {
// 	const cache: Record<string, number> = {};

// 	return function (n: number) {
// 		const key = `key-${n}`; // "key-2"
// 		const cachedValue = cache[key]; // 4

// 		if (cachedValue) return `${cachedValue} from cache`;

// 		const value = fn(n); // slow(3) => 6
// 		cache[key] = value; // { "key-3": 6 }

// 		return `${value} from function`;
// 	};
// }

// const m = memoize(slow);
// console.log(m(2)); // hisoblaydi
// console.log(m(3)); // hisoblaydi
// console.log(m(2)); // cache’dan oladi

// console.log("======== CHALLENGE-8 ========");

// type EventHandler = (argument: any) => void;
// function createEmitter() {
// 	const events: Record<string, EventHandler> = {};
// 	return {
// 		add(eventName: string, handler: EventHandler) {
// 			events[eventName] = handler;
// 		},
// 		call(eventName: string, argument: any) {
// 			const handler = events[eventName];
// 			if (handler) handler(argument);
// 		},
// 		remove(eventName: string, handler: EventHandler) {
// 			const handlerFn = events[eventName];
// 		},
// 	};
// }
// const e = createEmitter();
// const h = (data: string) => console.log(data);
// e.add("msg", h);
// e.call("msg", "hi"); // 'hi'
// e.remove("msg", h);
// e.emit("msg", "hi"); // hech narsa

// console.log("======== CHALLENGE-9 ========");
// function createTimers(n: number) {
// 	const functions: Array<() => number> = [];

// 	for (let i = 1; i <= n; i++) {
// 		functions.push(() => i);
// 	}

// 	return functions;
// }

// const fns = createTimers(5);
// console.log(fns[0]());
// console.log(fns[1]());
// console.log(fns[2]());
// console.log(fns[3]());
// console.log(fns[4]());

console.log("======== CHALLENGE-10 ========");
function partial(fn: (...args: number[]) => number, ...args: number[]) {
	return function (...nums: number[]) {
		return fn(...nums, ...args);
	};
}

const add = (...args: number[]) => args.reduce((a, c) => a + c);
const summa = partial(add, 1);
console.log(summa(10)); // 11
