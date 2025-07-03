/* Object destructuring */
// const person = { name: 'kent', age: 20, job: 'teacher' };
// const { job, name, age } = person;
// const age = person.age;
// const name = person.name
// const job = person.job

/* Array destructuring */
// const numbers = [20, 30, 40];
// const [a, b, c] = numbers;
// const a = numbers[0];
// const b = numbers[1];
// const c = numbers[2];

const person = {
	name: 'kent',
	age: 20,
	address: {
		state: {
			name: 'UZB',
			code: '+998',
		},
		city: 'Tashkent city',
	},
};

const { name, age, address } = person;
const { state, city } = address;
const { code, name: stateName } = state;

console.log('name = ', name);
console.log('age = ', age);
console.log('city = ', city);
console.log('code = ', code);
console.log('state.name = ', stateName);
