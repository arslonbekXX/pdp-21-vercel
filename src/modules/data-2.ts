export interface User {
	name: string;
	birthYear: number;
	job: string;
}

export const users: User[] = [
	{
		name: 'Kent',
		birthYear: 2000,
		job: 'teacher',
	},
	{ name: 'Mark', birthYear: 1900, job: 'killer' },
	{ name: 'Sherlock', birthYear: 1980, job: 'developer' },
];

export default function app() {}
