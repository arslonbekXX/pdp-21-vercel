// @ts-nocheck
const methods = {
	age: 20,
	jump() {
		console.log(`${this.name} is jumping...`);
	},
};

/* Factory Function */
function createBox(name, color, size) {
	const box = Object.create(methods); // {}

	box.name = name;
	box.color = color;
	box.size = size;

	return box;
}

const box1 = createBox("Box-1", "red", 200);
const box2 = createBox("Box-2", "blue", 300);

console.log(box1);
console.log(box2);
box1.jump();
box2.jump();

// console.log(box1.name === box2.name)

console.log("arslonbek".repeat(2));
console.log("kent".repeat(2));
