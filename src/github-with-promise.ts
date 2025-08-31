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

function getRepositories(username: string) {
	return new Promise<Repository[]>((resolve) => {
		console.log(`Loading Repositories of ${username} ...`);

		setTimeout(() => {
			// Backend was called (get repositories from database with username)
			const repositories: Repository[] = [
				{ id: "repo-id-1", name: "pdp-10" },
				{ id: "repo-id-2", name: "pdp-40" },
			];

			resolve(repositories);
		}, 2000);
	});
}

function getBranches(repoId: string) {
	return new Promise<Branch[]>((resolve) => {
		console.log(`Loading Branches of ${repoId} ...`);

		setTimeout(() => {
			// Backend was called (get branches from database with repoId)
			const branches: Branch[] = [
				{ id: "branch-id-1", name: "main" },
				{ id: "branch-id-2", name: "dev" },
			];

			resolve(branches);
		}, 2000);
	});
}

function getCommits(branchId: string) {
	return new Promise<Commit[]>((resolve) => {
		console.log(`Loading Commits of ${branchId} ...`);

		setTimeout(() => {
			// Backend was called (get commits from database with branchId)
			const commits: Commit[] = [
				{ id: "commit-id-1", message: "Initial commit" },
				{ id: "commit-id-2", message: "Second commit" },
			];

			resolve(commits);
		}, 2000);
	});
}

getUsers()
	.then((users) => {
		console.log("[USERS]", users);
		const user = users[0];
		return getRepositories(user.username);
	})
	.then((repositories) => {
		console.log("[REPOSITORIES]", repositories);
		const repo = repositories[0];

		return getBranches(repo.id);
	})
	.then((branches) => {
		console.log("[BRANCHES]", branches);
		const branch = branches[0];

		return getCommits(branch.id);
	})
	.then((commits) => {
		console.log("[COMMITS]", commits);
	});
