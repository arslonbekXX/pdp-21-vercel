function createIncrement(initialValue: number, interval: number) {
	return {
		increment(step: number) {},
		start() {},
	};
}

const { increment, start } = createIncrement(10, 2000);
increment(5);
increment(10);
increment(20);
increment(50);

start();
