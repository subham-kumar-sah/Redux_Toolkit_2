import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleRemove = (id) => {
    dispatch(removeTodo(id));
  };

  const handleEdit = (id, text) => {
    setEditId(id);
    setEditText(text);
  };

  const handleEditChange = (e) => {
    setEditText(e.target.value);
  };

  const handleEditSave = (id) => {
    if (editText.trim() !== "") {
      dispatch(updateTodo({ id, text: editText }));
      setEditId(null);
      setEditText("");
    }
  };

  const handleEditCancel = () => {
    setEditId(null);
    setEditText("");
  };

  //   const handleUpdate = (id, text) => {
  //     const newText = prompt("Update todo:", text);
  //     if (newText) {
  //       dispatch(updateTodo({ id, text: newText }));
  //     }
  //   };

  return (
    <div className="todos-container">
      <h2 className="todo-header">Todos</h2>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li className="list-item" key={todo.id}>
            {editId === todo.id ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={handleEditChange}
                  className="edit-input"
                />
                <button
                  className="save-btn"
                  onClick={() => handleEditSave(todo.id)}
                >
                  Save
                </button>
                <button className="cancel-btn" onClick={handleEditCancel}>
                  Cancel
                </button>
              </>
            ) : (
              <>
                <span className="todo-text">{todo.text}</span>
                <button
                  className="edit-btn"
                  onClick={() => handleEdit(todo.id, todo.text)}
                >
                  Edit
                </button>
              </>
            )}
            <button
              className="delete-btn"
              onClick={() => handleRemove(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Todos;
