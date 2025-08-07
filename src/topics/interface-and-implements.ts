/* interface and implements */
interface IBoxFields {
	name: string;
	size: number;
	color?: string;
}

interface IBoxMethods {
	run(): void;
	jump(): void;
}

interface IBox extends IBoxFields, IBoxMethods {}

class Box implements IBox {
	constructor(public name: string, public size: number, public color?: string) {}

	run() {
		console.log(`${this.name} is running`);
	}

	jump() {
		console.log(`${this.name} is jumping...`);
	}
}

const box = new Box("Box", 10);
console.log(box.color?.toLowerCase());
