function createIncrement(initialValue: number, interval: number) {
	const results: number[] = [];
	let value = initialValue;
	return {
		increment(step: number) {
			value += step;
			results.push(value);
		},
		start() {
			for (let i = 0; i < results.length; i++) {
				const result = results[i];
				const delay = interval * (i + 1);
				setTimeout(() => console.log(result), delay);
			}
		},
	};
}

const { increment, start } = createIncrement(10, 2000);
increment(5);
increment(10);
increment(20);
increment(50);

start();
