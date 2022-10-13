import Todo from '../model/todo.js';

// get all the todos
export const getAllTodos = (req, res) => {
  Todo.find()
    .then((todos) => res.json(todos))
    .catch((err) => res.status(400).json('Error: ' + err));
};

// create a todo
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

// get a todo by id
export const getTodoById = (req, res) => {
  // get the id from the request params
  const { id } = req.params;
  // find the todo by id
  Todo.findById(id).exec((err, todo) => {
    if (err || !todo) {
      return res.status(400).json({
        error: "Todo not found",
      });
    }
    // return the todo in json format
    res.json(todo);
  });
}

export const updateTodo = (req, res) => {
  // get the id from the request params
  const { id } = req.params;
  // find the todo by id and update it
  Todo.findByIdAndUpdate(id, { $set: req.body }, { new: true }).exec(
    (err, todo) => {
      if (err || !todo) {
        return res.status(400).json({
          error: "Todo not found",
        });
      }
      // return the updated todo in json format
      res.json(todo);
    }
  );
}

export const deleteTodo = (req, res) => {
  // get the id from the request params
  const { id } = req.params;
  // find the todo by id and delete it
  Todo.findByIdAndDelete(id).exec((err, todo) => {
    if (err || !todo) {
      return res.status(400).json({
        error: "Todo not found",
      });
    }
    // return the deleted todo in json format
    res.json(todo);
  });
}
