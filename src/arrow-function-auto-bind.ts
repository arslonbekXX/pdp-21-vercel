const p1 = {
	name: "Kent",
	run() {
		console.log(this);

		const jump = () => console.log();
	},
};

p1.run();
