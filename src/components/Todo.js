import React from "react";

const Todo = ({ todo, toggleTodo }) => {
  function handleTodoClick() {
    toggleTodo(todo.id);
  }

  return (
    <div className="px-3">
      <span>
        <input
          key={todo.id}
          type="checkbox"
          checked={todo.complete}
          onChange={handleTodoClick}
          className="form-check-input"
        />
      </span>
      {todo.name}
    </div>
  );
};

export default Todo;
