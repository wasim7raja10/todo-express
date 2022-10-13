import { Router } from "express";
const router = Router();

// these are the controllers
import { getAllTodos, createTodo, getTodoById, updateTodo, deleteTodo } from "../controllers/todo.js";

// to get all the todos
router.get("/todo/", getAllTodos);

// to create a todo
router.post("/todo/create/", createTodo);

// to get a todo by id
router.get("/todo/:id", getTodoById);

// to update a todo
router.put("/todo/:id", updateTodo);

// to delete a todo
router.delete("/todo/:id", deleteTodo);

// we will export the router to import it in the index.js
export default router;
