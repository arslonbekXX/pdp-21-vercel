// function createIncrement(initialValue: number) {
// 	let count = initialValue;
// 	return function () {
// 		count++;
// 		return count;
// 	};
// }

// const increment = createIncrement(10);

// console.dir(increment());
// console.dir(increment());
// console.dir(increment());
// console.dir(increment());

function createTrafficLight() {
	let status = "OFF";

	return {
		getStatus() {
			return status;
		},
		on() {
			status = "ON";
		},
		off() {
			status = "OFF";
		},
	};
}

const trafficLight = createTrafficLight();

trafficLight.on();
console.log(trafficLight.getStatus());
trafficLight.off();
console.log(trafficLight.getStatus());

function createFunctions(count: number) {
	const functions = [];

	for (let i = 1; i <= count; i++) {
		functions.push(() => i);
	}

	return functions;
}

const fns = createFunctions(5);

console.log(fns[0]()); // 1
console.log(fns[1]()); // 2
console.log(fns[2]()); // 3
console.log(fns[3]()); // 4
console.log(fns[4]()); // 5
