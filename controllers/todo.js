import Todo from '../model/todo.js';

export const getAllTodos = (req, res) => {
  // simply use .find() method and it will return all the todos
  Todo.find()
    .sort("-createdAt")
    .exec((err, todos) => {
      // error checking
      if (err || !todos) {
        return res.status(400).json({
          error: "Something went wrong in finding all todos",
        });
      }
      // return all the todos in json format
      res.json(todos);
    });
};

export const createTodo = (req, res) => {
  // we will get json data from the frontend i.e. req.body
  const todo = new Todo(req.body);

  // create a todo instance by passing 'task' field from 'req.body'
  todo.save((err, task) => {
    if (err || !task) {
      return res.status(400).json({
        error: "something went wrong",
      });
    }
    // todo is created
    // send the created todo as a json response
    res.json({ task });
  });
};

