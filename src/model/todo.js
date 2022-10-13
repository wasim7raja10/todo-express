import mongoose from 'mongoose';

const TodoSchema = new mongoose.Schema(
  {
    task: {
      type: String,
      required: true,
      trim: true,
      maxlength: 30,
    },
  },
  { timestamps: true }
);

const Todo = mongoose.model('Todo', TodoSchema);

export default Todo;
