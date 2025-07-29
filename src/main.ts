// @ts-nocheck
/* Factory Function  */
const prototype = {
	run() {
		console.log(`${this.name} is running...`);
	},
	jump() {
		console.log(`${this.name} is jumping...`);
	},
};

function createBox(name, color) {
	const box = Object.create(prototype);
	box.name = name;
	box.color = color;

	return box;
}

const _box1 = createBox("box1", "red");

console.log("_box1 = ", _box1);

/* Constructor Function */
function Box(name, color) {
	this.name = name;
	this.color = color;
}

Box.prototype.run = function () {
	console.log(`${this.name} is running...`);
};

Box.prototype.jump = function () {
	console.log(`${this.name} is jumping...`);
};

const box1 = new Box("box1", "red");
console.log("box1 = ", box1);

_box1.run();
box1.run();
