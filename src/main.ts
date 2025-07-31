// @ts-nocheck

/* Constructor Function */
function Box(name, color) {
	this.name = name;
	this.color = color;

	return this;
}

Box.prototype.run = function () {
	console.log(`${this.name} is running...`);
};

Box.prototype.jump = function () {
	console.log(`${this.name} is jumping...`);
};

const box1 = new Box("box1", "red");
console.log("box1 = ", box1);

const box2 = Box.call(Object.create(Box.prototype), "box2", "blue");

box1.run();
box2.run();
console.log("box1 = ", box1);
console.log("box2 = ", box2);
