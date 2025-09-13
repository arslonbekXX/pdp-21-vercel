import express from "express";
import { todos } from "./db";
import cors from "cors";
import type { Todo } from "./types";
import { faker } from "@faker-js/faker";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/todos", (req, res) => {
	res.send(todos);
});

app.get("/todos/:todoId", (req, res) => {
	const todoId = req.params.todoId;
	const todo = todos.find((todo) => todo.id === todoId);
	if (todo) res.send(todo);
	else res.send({ message: "Not found" });
});

app.post("/todos", (req, res) => {
	const title = req.body.title;
	const todo: Todo = { id: faker.string.uuid(), title, completed: false };

	const isExistTodo = todos.find((todo) => todo.title === title);
	if (isExistTodo) return res.status(400).send({ message: "Todo already exists" });

	todos.push(todo);

	res.send(todo);
});

app.put("/todos/:todoId", (req, res) => {
	const title = req.body.title as string;
	const todoId = req.params.todoId;
	const todo = todos.find((todo) => todo.id === todoId);
	if (!todo) return res.status(404).send({ message: `Todo not found with this id ${todoId}` });

	todo.title = title;
	res.send(todo);
});

app.delete("/todos/:todoId", (req, res) => {
	const todoId = req.params.todoId;
	const todoIdx = todos.findIndex((todo) => todo.id === todoId);
	if (todoIdx === -1)
		return res.status(404).send({ message: `Todo not found with this id ${todoId}` });

	const [deletedTodo] = todos.splice(todoIdx, 1);
	res.send(deletedTodo);
});

const PORT = 4000;
app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}...`);
});
