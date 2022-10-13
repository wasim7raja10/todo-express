import { Router } from "express";
const router = Router();

// these are the controllers
import { getAllTodos, createTodo } from "../controllers/todo.js";

// to get all the todos
router.get("/todo/", getAllTodos);

// to create a todo
router.post("/todo/create/", createTodo);

// we will export the router to import it in the index.js
export default router;
