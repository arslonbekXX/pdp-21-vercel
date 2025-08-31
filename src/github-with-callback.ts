interface User {
	id: string;
	username: string;
}

interface Repository {
	id: string;
	name: string;
}

interface Branch {
	id: string;
	name: string;
}

interface Commit {
	id: string;
	message: string;
}

function getUsers(callback: (users: User[]) => void) {
	console.log("Loading users...");

	setTimeout(() => {
		const users: User[] = [
			{ id: "user-id-1", username: "arslonbekXX" },
			{ id: "user-id-2", username: "john_doe" },
		];

		callback(users);
	}, 2000);
}

function getRepositories(username: string, callback: (repositories: Repository[]) => void) {
	console.log("Repositories loading...");

	setTimeout(() => {
		// Backend was called (get repositories from database with username)
		const repositories: Repository[] = [
			{ id: "repo-id-1", name: "pdp-10" },
			{ id: "repo-id-2", name: "pdp-40" },
		];

		callback(repositories);
	}, 2000);
}

function getBranches(repoId: string, callback: (branches: Branch[]) => void) {
	console.log("Branches loading...");

	setTimeout(() => {
		// Backend was called (get branches from database with repoId)
		const branches: Branch[] = [
			{ id: "branch-id-1", name: "main" },
			{ id: "branch-id-2", name: "dev" },
		];

		callback(branches);
	}, 2000);
}

function getCommits(branchId: string, callback: (commits: Commit[]) => void) {
	console.log("Commits loading...");

	setTimeout(() => {
		// Backend was called (get commits from database with branchId)
		const commits: Commit[] = [
			{ id: "commit-id-1", message: "Initial commit" },
			{ id: "commit-id-2", message: "Second commit" },
		];

		callback(commits);
	}, 2000);
}

getUsers((users) => {
	console.log("[USERS]", users);
	const user = users[0];

	getRepositories(user.username, (repositories) => {
		console.log("[REPOSITORIES]", repositories);
		const repo = repositories[0];

		getBranches(repo.id, (branches) => {
			console.log("[BRANCHES]", branches);

			const branch = branches[0];

			getCommits(branch.id, (commits) => {
				console.log("[COMMITS]", commits);
			});
		});
	});
});
