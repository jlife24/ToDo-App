import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [initialValue, setValue] = useState("");

  const checkSubmit = (event) => {
    // prevent default reload action
    event.preventDefault();
    console.log(initialValue);
    if (initialValue) {
      // add todo
      addTodo(initialValue);
      // clear form after submission
      setValue("");
    }
  };

  return (
    <form onSubmit={checkSubmit} className="TodoForm">
      <input
        type="text"
        value={initialValue}
        onChange={(event) => setValue(event.target.value)}
        className="todo-input"
        placeholder="Enter your task today?"
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};
