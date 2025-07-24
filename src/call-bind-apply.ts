const p1 = { name: "Kent" }; // HM_0001
const p2 = { name: "Mark" }; // HM_0002

function run() {
	// @ts-ignore
	const name = this?.name || "Alpomish";
	console.log(`${name} is running`);
} // HM_0003

// run(); // HM_0003()

console.log("-------- Call Method --------");
/* Function Call Method  */
run.call(p1); // HM_0001.HM_0003()
run.call(p2); // HM_0002.HM_0003()

console.log("-------- Apply Method --------");
/* Function Apply Method  */
run.apply(p1); // HM_0001.HM_0003()
run.apply(p2); // HM_0002.HM_0003()

console.log("-------- Bind Method --------");
/* Function Bind Method  */
const run1 = run.bind(p1); // HM_0001.HM_0003()
const run2 = run.bind(p2); // HM_0002.HM_0003()

run1(); // HM_0001.HM_0003()
run2(); // HM_0002.HM_0003()
