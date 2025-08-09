// class String2 {
// 	static length = 10;
// 	constructor(private value: string) {}

// 	repeat(count: number) {
// 		let result = "";
// 		for (let i = 0; i < count; i++) {
// 			result += this.value;
// 		}

// 		return result;
// 	}

// 	concat(...args: string[]) {
// 		let result = this.value;

// 		for (const arg of args) {
// 			result += arg;
// 		}

// 		return result;
// 	}

// 	static create(value: string) {
// 		return new String2(value);
// 	}
// }

// const str = new String("Kent");
// console.log("String[repeat] = ", str.repeat(2));
// console.log("String[concat] = ", str.concat(" ", "Mark"));

// const str2 = new String2("Kent");
// console.log("String2[repeat] = ", str2.repeat(2));
// console.log("String2[concat] = ", str2.concat(" ", "Mark"));

// const str3 = String2.create("Mark");
// console.log(str3);

// console.log(Number.parseInt("22.23231"));
// console.log(Object.values({ a: 20, b: 30 }));
// console.log(Object.keys({ a: 20, b: 30 }));
// console.log(Object.entries({ a: 20, b: 30 }));

// console.log(String2.length);

class Box {
	static count = 0;

	constructor() {
		Box.count++;
	}
}

const box1 = new Box();
const box2 = new Box();
const box3 = new Box();
const box4 = new Box();
const box5 = new Box();
const box6 = new Box();
const box7 = new Box();
const box8 = new Box();
const box9 = new Box();

console.log(Box.count);
