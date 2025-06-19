import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: nanoid(),
      text: "Learn Redux Toolkit",
      completed: false,
    },
    {
      id: nanoid(),
      text: "Build a Todo App",
      completed: false,
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        text: action.payload,
        completed: false,
      };
      state.todos.push(newTodo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.text = text;
      }
    },
  },
});

export default todoSlice.reducer;
export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
