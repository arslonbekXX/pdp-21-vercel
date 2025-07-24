// const p1 = {
// 	name: "kent",
// 	run() {
// 		console.log(`${this.name} is running`);
// 	},
// };

// const p2 = { name: "mark" };

// p1.run();
// p1.run.call(p2);

// const run2 = p1.run.bind(p2);
// const run3 = run2.bind(p1);
// run2.call(p1);
// run3();

function bind(fn: any, object: any) {
	return function (...args: any[]) {
		return fn.apply(object, args);
	};
}

const p1 = { name: "kent" };
function run() {
	// @ts-expect-error
	console.log(this);
	return "hi";
}

console.log(run.bind(p1)());
console.log(bind(run, p1)());
