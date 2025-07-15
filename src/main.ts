/* Extends */

/* Extends with Interface */

// interface Animal {
// 	name: string;
// }

// interface Dog extends Animal {
// 	breed: string;
// }

// const dog: Dog = {
// 	name: 'Reks',
// 	breed: 'Nemis apcharka',
// };

/* Extends with Types */

// type Animal = {
// 	name: string;
// };

// type Dog = Animal & {
// 	breed: string;
// };

// const dog: Dog = {
// 	name: 'Reks',
// 	breed: 'Nemis apcharka',
// };

/* Declaration Merging */
/* into react package */
// interface ReactJSX {
// 	name: string;
// }

// /* local file */
// interface ReactJSX {
// 	age: number;
// }

// const a: ReactJSX = {
// 	name: 'kent',
// 	age: 20,
// };

type Literal = 200 | 3400;
const a: Literal = 200;
console.log(a);
