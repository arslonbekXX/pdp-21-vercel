/* Promise.resolve and Promise.reject */
// const p1 = new Promise(() => {});
// console.log(p1);

// const p2 = Promise.resolve("pdp-21");
// console.log(p2);

// const p3 = Promise.reject(new Error("pdp-21")).catch(console.error);
// console.log(p3);

/* then and catch and finally */

function checkingHomework(hasTime: boolean, homework?: string) {
	return new Promise<string>((resolve, reject) => {
		if (hasTime && homework) resolve(homework);
		if (!hasTime && homework) reject(new Error("no time"));
		if (!homework) reject(new Error("no homework"));
	});
}

checkingHomework(false, "economics")
	.then((homework: string) => {
		console.log(`homework(${homework}) is done`);
	})
	.catch(({ message }: Error) => {
		console.error("homework is not done, because", message);
	})
	.finally(() => {
		console.log("Promise is done");
	});
