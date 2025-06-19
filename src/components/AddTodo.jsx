import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <form className="add-todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="add-todo-input"
        placeholder="Enter a todo ...."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button type="submit" className="add-todo-btn">
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
