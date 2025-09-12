import express from "express";
import { todos } from "./db";
import cors from "cors";
import type { Todo } from "./types";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/todos", (req, res) => {
	res.send(todos);
});

app.get("/todos/:todoId", (req, res) => {
	const todoId = Number(req.params.todoId);
	const todo = todos.find((todo) => todo.id === todoId);
	if (todo) res.send(todo);
	else res.send({ message: "Not found" });
});

app.post("/todos", (req, res) => {
	const title = req.body.title;
	const todo: Todo = { id: Math.random(), title, completed: false };
	todos.push(todo);

	res.send(todo);
});

app.put("/todos/:todoId", (req, res) => {});
app.delete("/todos/:todoId", (req, res) => {});

const PORT = 4000;
app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}...`);
});
