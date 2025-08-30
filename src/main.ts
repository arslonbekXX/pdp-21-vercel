interface User {
	id: string;
	username: string;
}

function getUsers() {
	return new Promise<User[]>((resolve) => {
		console.log("Loading users...");

		setTimeout(() => {
			const users: User[] = [
				{ id: "user-id-1", username: "arslonbekXX" },
				{ id: "user-id-2", username: "john_doe" },
			];

			resolve(users);
		}, 2000);
	});
}

getUsers().then((users) => {
	console.log("[USERS]", users);
	const user = users[0];
});
