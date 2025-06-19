// type Job = "teacher" | "developer" | "gamer";
// interface Person {
// 	name: string;
// 	job: Job;
// }

// const person: Person = {
// 	name: "Arslonbek",
// 	job: "teacher",
// };

// type Job = "teacher" | "developer";

// const jobs: Record<Job, number> = {
// 	teacher: 10,
// 	gamer: 20,
// 	developer: 5,
// };

/* Union type vs Literal type */
// type A = "blue" | 20 | false | 50; // Union
// type B = "apple" | "banana" | "graph"; // Literal

/* Challenge-1(Record): */
// type Fruit = "apple" | "banana" | "grape";
// type FruitColor = "red" | "yellow" | "black" | "green"
// const fruitColors: Record<Fruit, FruitColor> = {
// 	apple: "red",
// 	banana: "black",
// 	grape: "green",
// };
// console.log("fruitColors = ", fruitColors);

/* Challenge-1(Record): */

// type UserRole = "admin" | "user" | "guest";
// const permissions: Record<UserRole, number> = {
// 	admin: 10,
// 	user: 5,
// 	guest: 0,
// };
