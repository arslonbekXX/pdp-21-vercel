import { sum, pick } from "pdp-21";

console.log(sum(1, 2));

const person = { name: "Kent", age: 20, job: "teacher" };

console.log(pick(person, ["name", "age"]));