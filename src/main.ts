// @ts-nocheck
/* Prototype */
// const text1 = new String("I am a String1"); // new String("I am a String1")
// const text2 = new String("I am a String2");

// console.log(text1);
// console.log(text2);

// console.log(text1.repeat(2));
// console.log(text2.repeat(2));

// const num1 = 20.232323;
// console.log(num1.toFixed(2));

// const heading = document.createElement("h1");
// console.log(heading);

/* Explaining __proto__ */

// function Box(name) {
// 	this.name = name;
// }

// const box = new Box("Box-1");
// console.log(Box.prototype === box.__proto__);

// const text = "hello world"; // new String("hello world")

// console.log(text.__proto__ === String.prototype);

// function app() {}
// console.log(app.__proto__ === Function.prototype)

/* Challenges */

function A() {}
function B() {}
function C() {}

B.prototype = Object.create(A.prototype);
C.prototype = Object.create(B.prototype);
const a = new A();
const b = new B();
const c = new C();

// console.log(a.__proto__ === A.prototype);
// console.log(a.__proto__.__proto__ === Object.prototype);
// console.log(A.__proto__ === Function.prototype);
console.log(A.prototype.__proto__ === Object.prototype);

// console.log(b.__proto__ === B.prototype);
// console.log(b.__proto__.__proto__ === A.prototype);
console.log(B.prototype.__proto__ === A.prototype);

// console.log(c.__proto__ === C.prototype);
// console.log(c.__proto__.__proto__ === B.prototype);
