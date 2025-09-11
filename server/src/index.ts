import express from "express";
import { todos } from "./db";

const app = express();

app.get("/todos", (req, res) => {
	res.send(todos);
});

app.get("/todos/:todoId", (req, res) => {
	const todoId = req.params.todoId;
	console.log("todoId = ", todoId);
	res.send({ todoId });
});

const PORT = 4000;
app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}...`);
});

/**
 * /todos -> todos[]
 * /todos/1 ->  todo.id === 1
 * /todos/allambalo ->  { message: "Not found" }
 */
