// /* Deterministic Function */
// function deterministic(num: number) {
// 	return 2 * num;
// }

// deterministic(10); // 20
// deterministic(10); // 20
// deterministic(10); // 20
// deterministic(10); // 20

// /* Non-Deterministic Function */
// function nonDeterministic() {
// 	return Math.random();
// }

// nonDeterministic(); // 0.12312312323
// nonDeterministic(); // 0.22312312323
// nonDeterministic(); // 0.32312312323
// nonDeterministic(); // 0.42312312323

/* Without Side Effect */
// function withoutSideEffect(num: number) {
// 	return 2 * num;
// }

// const value = 10;
// withoutSideEffect(value);

/* With Side Effect, Example 1: Object */
function withSideEffect(obj: { num: number }) {
	obj.num = 2 * obj.num; // HM_0001.num = 20;
	return obj;
}

const value = { num: 10 }; // HM_0001
console.log(value);
withSideEffect(value); // HM_0001
console.log(value);

/* With Side Effect, Example 2: Console */
function withSideEffect2(num: number) {
	console.log(num);

	return 2 * num;
}

withSideEffect2(10);
withSideEffect2(10);

function pure(a: number) {
	return a;
}

const a1 = console.log(10); // undefined
const a2 = console.log(); // undefined
const a3 = console.log(); // undefined
const a4 = console.log(); // undefined

console.log(a1, a2, a3, a4);

let a = 2;
function pow(num: number) {
	return num ** a;
}

pow(10);
pow(10);
