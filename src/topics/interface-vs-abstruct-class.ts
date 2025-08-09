export abstract class Box {
	abstract jump(): void;
	abstract run(): void;
}

export class SmallBox extends Box {
	constructor(private name: string, private size: number) {
		super();
	}

	jump(): void {
		console.log("SmallBox jump");
	}
	run(): void {
		console.log("SmallBox run");
	}
}

export interface IBoxFields {
	name: string;
	size: number;
}

export interface IBoxMethods {
	jump(): void;
	run(): void;
}

export class BigBox implements IBoxFields, IBoxMethods {
	constructor(public name: string, public size: number) {}

	jump(): void {
		console.log("BigBox jump");
	}
	run(): void {
		console.log("BigBox run");
	}
}
