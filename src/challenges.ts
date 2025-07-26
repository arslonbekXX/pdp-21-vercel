// // // =========================================
// // // 🔥 Advanced Challenges (No Solutions)
// // // =========================================

// // // Challenge 1: Try/Catch/Finally + Throw
// // // Muammo: divideAndLog funksiyasi ikkita sonni bo‘ladi.
// // // Agar natija manfiy bo‘lsa, "Negative result" xatolik yuboring.
// // // Har doim yakunda "Operation finished" chiqsin.
// // // Type: (a: number, b: number) => number

// // function divideAndLog(a: number, b: number) {
// // 	try {
// // 		const result = a / b;
// // 		if (result < 0) throw new Error("Negative result");

// // 		return result;
// // 	} catch (error: any) {
// // 		if (error instanceof Error) {
// // 			return error.message;
// // 		}
// // 	} finally {
// // 		console.log("Operation finished");
// // 	}
// // }

// // console.log(divideAndLog(10, 2)); // 5
// // console.log(divideAndLog(5, -1)); // Error: Negative result

// // Challenge 2: Object.values, Object.entries
// // Muammo: Berilgan objectda qiymatlar string bo‘lsa — ularni katta harflarda qaytaring
// // object: { name: "Ali", age: 20, job: "dev" }
// // => ["ALI", "DEV"]
// // Type: (obj: { [key: string]: any }) => string[]

// function extractAndCapitalize(obj) {
//  // TODO: Object.values + typeof + .toUpperCase()
// }

// // Challenge 3: Object.keys + dynamic property update
// // Muammo: objectdagi har bir string qiymatli property'ni "_updated" bilan tugatib yangilang
// // Input: { title: "post", views: 123, status: "draft" }
// // Output: { title: "post_updated", views: 123, status: "draft_updated" }

// // function updateStringValues(obj: Record<string, unknown>) {
// // 	const keys = Object.keys(obj);

// // 	for (const key of keys) {
// // 		const value = obj[key];
// // 		if (typeof value === "string") obj[key] = value + `_updated`;
// // 	}

// // 	return obj;
// // }

// // console.log(updateStringValues({ title: "post", views: 123, status: "draft" }));

// // Challenge 4: this keyword — oddiy function vs arrow function
// // Muammo: this.name 2 xil functionda qanday ishlashini tushuntiring (oddiy va arrow function)

// const person1 = {
// 	name: "Arslonbek",
// 	sayHello: function () {
// 		console.log(this.name);
// 	},
// };

// const person2 = {
// 	name: "Arslonbek",
// 	sayHello: () => {
// 		console.log(this.name);
// 	},
// };

// person1.sayHello(); // Arslonbek
// person2.sayHello(); // Error can't read properties of undefined (reading 'name')

// // Challenge 5: this in nested function
// // Muammo: this.name ni ichki functionda yo‘qotib qo‘ymaslik kerak

// const user = {
// 	name: "Ali",
// 	greet() {
// 		const _this = this;
// 		function inner() {
// 			console.log(_this.name);
// 		}
// 		inner();
// 	},
// };

// user.greet(); // ?

// Challenge 6: call + multiple contexts
// Muammo: greet funksiyasini har xil user kontekstlarida ishlating

// function greet(greeting: string) {
// 	// @ts-ignore
// 	const message = `${greeting} ${this.name}`;
// 	return message;
// }

// const userA = { name: "Alice" };
// const userB = { name: "Bob" };

// console.log(greet.apply(userA, ["Hello,"])); // Hello, Alice
// console.log(greet.call(userB, "Hi,")); // Hi, Bob

// Challenge 7: apply with dynamic arguments
// Muammo: user objectdagi qiymatlarni argument sifatida greet funksiyasiga uzating

// const userX = {
// 	name: "Xurshid",
// 	greeting: "Welcome",
// };

// function greetPerson(greeting: string, name: string) {
// 	return `${greeting} ${name}`;
// }

// console.log(greetPerson.apply(null, [userX.greeting, userX.name]));

/// / Challenge 8: bind chain
// Muammo: greet funksiyasiga avval this ni, keyin greeting ni bind qilib qo‘shilgan variantini yarating

// const person = { name: "Sardor" };

// function say(greeting: string) {
// 	// @ts-ignore
// 	return greeting + this.name;
// }

// const bind1 = say.bind(person, "Salom ");

// console.log(bind1()); // Salom, Sardor

// Challenge 9: Typescript types — union vs literal
// Muammo: status faqat "loading" | "success" | "error" qiymatlaridan biri bo‘lishi kerak

// Type: status: "loading" | "success" | "error"

// function handleStatus(status) {
// 	// TODO: Har bir status uchun alohida console chiqaring
// }

// handleStatus("loading"); // "Please wait..."
// handleStatus("error"); // "Something went wrong"
// handleStatus("invalid"); // ?

// Challenge 10: Typescript types — narrowing
// Muammo: input string yoki number bo‘lishi mumkin. Agar string bo‘lsa uzunligini, agar number bo‘lsa kvadratini qaytaring

// Type: (value: string | number) => number

// function processValue(value) {
// 	// TODO: typeof orqali farqlang
// }

// console.log(processValue("hello")); // 5
// console.log(processValue(4)); // 16
