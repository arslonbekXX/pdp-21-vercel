/* Simple promise handling */
// const p1 = new Promise<string>((res) => setTimeout(() => res("p1-result"), 1000));
// const p2 = new Promise<string>((res) => setTimeout(() => res("p2-result"), 5000));
// const p3 = new Promise<string>((res) => setTimeout(() => res("p3-result"), 3000));
// const p4 = new Promise<string>((res) => setTimeout(() => res("p4-result"), 2000));
// const promises = [p1, p2, p3, p4];

// for (const promise of promises) {
// 	promise.then(console.log).catch(({ message }: Error) => console.error(message));
// }

/* Promise.all */
// const p1 = new Promise<string>((res) => setTimeout(() => res("p1-result"), 1000));
// const p2 = new Promise<string>((res) => setTimeout(() => res("p2-result"), 5000));
// const p3 = new Promise<string>((res, rej) => setTimeout(() => rej(new Error("p3-error")), 3000));
// const p4 = new Promise<string>((res) => setTimeout(() => res("p4-result"), 2000));
// const promises = [p1, p2, p3, p4];

// Promise.all(promises)
// 	.then(console.log)
// 	.catch(({ message }: Error) => console.error(message));

/* Promise.race */
// const p1 = new Promise<string>((res) => setTimeout(() => res("p1-result"), 1000));
// const p2 = new Promise<string>((res) => setTimeout(() => res("p2-result"), 5000));
// const p3 = new Promise<string>((res, rej) => setTimeout(() => rej(new Error("p3-error")), 500));
// const p4 = new Promise<string>((res) => setTimeout(() => res("p4-result"), 2000));
// const promises = [p1, p2, p3, p4];

// Promise.race(promises)
// 	.then(console.log)
// 	.catch(({ message }: Error) => console.error(message));

/* Promise.allSettled */
// const p1 = new Promise<string>((res) => setTimeout(() => res("p1-result"), 1000));
// const p2 = new Promise<string>((res) => setTimeout(() => res("p2-result"), 5000));
// const p3 = new Promise<string>((res, rej) => setTimeout(() => rej(new Error("p3-error")), 500));
// const p4 = new Promise<string>((res) => setTimeout(() => res("p4-result"), 2000));
// const promises = [p1, p2, p3, p4];

// Promise.allSettled(promises)
// 	.then((results) => {
// 		for (const result of results) {
// 			if (result.status === "fulfilled") {
// 				console.log(`Fulfilled: `, result.value);
// 			}
// 			if (result.status === "rejected") {
// 				console.log(`Rejected: ${result.reason}`);
// 			}
// 		}
// 	})
// 	.catch(({ message }: Error) => console.error(message));

// /* Promise.any */
// const promise1 = Promise.reject(new Error("error"));
// const promise2 = new Promise((resolve) => setTimeout(resolve, 100, "quick"));
// const promise3 = new Promise((resolve) => setTimeout(resolve, 500, "slow"));

// const promises = [promise1, promise2, promise3];

// Promise.any(promises).then((value) => console.log(value));

// // Expected output: "quick"
