import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";
import userReducer from "../features/todo/usersSlice";
const store = configureStore({
  reducer: {
    todos: todoReducer,
    users: userReducer,
  },
});

export default store;
