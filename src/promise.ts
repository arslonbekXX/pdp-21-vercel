// // /* Pending Promise (state = pending) */
// // console.log("======= PENDING =======");
// // const pendingPromise = new Promise(() => {});
// // console.log(pendingPromise);

// // /* Resolved(Fulfilled) Promise (state = pending) */
// // console.log("======= FULFILLED =======");
// // const fulfilledPromise = new Promise((resolve, reject) => {
// // 	resolve(10);
// // });
// // console.log(fulfilledPromise);

// // /* Rejected Promise (state = pending) */
// // console.log("======= REJECTED =======");
// // const rejectedPromise = new Promise((resolve, reject) => {
// // 	reject(new Error("something error"));
// // });
// // console.log(rejectedPromise);

// function doHomework(hasTime: boolean, isExistHomework: boolean) {
// 	return new Promise((resolve, reject) => {
// 		if (isExistHomework && hasTime) return resolve("Homework was done");
// 		if (!isExistHomework && hasTime) return;
// 		if (isExistHomework && !hasTime) return reject(new Error("Homework was not done"));
// 		if (!isExistHomework && !hasTime)
// 			return reject(new Error("Homework and time are not available"));
// 	});
// }

// console.log(doHomework(true, true));
// console.log(doHomework(true, false));
// console.log(doHomework(false, true));
// console.log(doHomework(false, false));

/**
 * doHomework(true, true) // Promise<fulfilled>("Homework was done")
 * doHomework(true, false) // Promise<pending>(undefined)
 * doHomework(false, true) // Promise<rejected>("Homework was not done")
 * doHomework(false, false) // Promise<rejected>("Homework and time are not available")
 */

/* Simple try-catch */
// try {
// 	throw new Error("First");
// 	throw new Error("Second");
// 	throw new Error("Third");
// } catch (error: any) {
// 	console.log("i am working...");
// }

/* Promise try-catch */
// try {
// 	new Promise((res, rej) => rej(new Error("First")));
// 	new Promise((res, rej) => rej(new Error("Second")));
// 	new Promise((res, rej) => rej(new Error("Third")));
// } catch (error: any) {
// 	console.log("i am working...");
// }

/* setTimeout try-catch */
try {
	setTimeout(() => {
		throw new Error("First");
	}, 0);

	setTimeout(() => {
		throw new Error("Second");
	}, 0);

	setTimeout(() => {
		throw new Error("Third");
	}, 0);
} catch (error: any) {
	console.log("i am working...");
}
