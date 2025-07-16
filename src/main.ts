import { calculateAge } from './modules/utils';
import * as Data from './modules/data'; // Data = {User, users}
import { users as users2 } from './modules/data-2';

function displayUsers(users: Data.User[]) {
	for (const { name, birthYear } of users) {
		const age = calculateAge(birthYear);
		console.log(`${name} is ${age} years old`);
	}
}

displayUsers(Data.users); // data
displayUsers(users2); // data-2
