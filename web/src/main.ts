import type { User } from "./types";
import { sleep } from "./utils";
import { faker } from "@faker-js/faker";

const btnPostRegister = document.querySelector(".btn-post-register") as HTMLButtonElement;
const btnPostCreateGame = document.querySelector(".btn-post-create-game") as HTMLButtonElement;
const btnPostLogin = document.querySelector(".btn-post-login") as HTMLButtonElement;
const baseURL = "http://localhost:4000";

let user: User | null = null;
const handleRegister = async (e: MouseEvent) => {
	const btn = e.target as HTMLButtonElement;
	btn.innerHTML += "...";
	const registerBody: Pick<User, "name" | "email" | "password"> = {
		name: faker.person.firstName().toLowerCase(),
		email: faker.internet.email().toLowerCase(),
		password: faker.internet.password({ length: 4 }),
	};

	await sleep();

	try {
		const res = await fetch(`${baseURL}/auth/register`, {
			method: "POST",
			body: JSON.stringify(registerBody),
			headers: { "Content-Type": "application/json" },
		});
		const data = await res.json();
		user = data.player;
	} catch (error) {
	} finally {
		btn.innerHTML = btn.innerHTML.replace("...", "");
	}
};

const handleLogin = async (e: MouseEvent) => {
	const btn = e.target as HTMLButtonElement;
	btn.innerHTML += "...";
	const loginBody: Pick<User, "email" | "password"> = {
		email: "",
		password: "",
	};

	await sleep();

	try {
		const res = await fetch(`${baseURL}/auth/login`, {
			method: "POST",
			body: JSON.stringify(loginBody),
			headers: { "Content-Type": "application/json" },
		});
		const data = await res.json();
		user = data.player;
	} catch (error) {
		console.error("error = ", error);
	} finally {
		btn.innerHTML = btn.innerHTML.replace("...", "");
	}
};

const handleCreateGame = async (e: MouseEvent) => {
	const btn = e.target as HTMLButtonElement;
	btn.innerHTML += "...";

	if (!user) return alert("User is not logged in");
	try {
		const res = await fetch(`${baseURL}/games`, {
			method: "POST",
			body: JSON.stringify({ player1Id: user.id }),
			headers: { "Content-Type": "application/json" },
		});
		const data = await res.json();
		console.log("data = ", data);
	} catch (error) {
		console.error("error = ", error);
	} finally {
		btn.innerHTML = btn.innerHTML.replace("...", "");
	}
};

btnPostRegister.addEventListener("click", handleRegister);
btnPostCreateGame.addEventListener("click", handleCreateGame);
btnPostLogin.addEventListener("click", handleLogin);
