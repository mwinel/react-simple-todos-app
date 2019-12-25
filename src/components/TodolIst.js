import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, toggleTodo }) => {
  return todos.map(todo => {
    return (
      <li className="list-group-item d-flex justify-content-between py-3">
        <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} />
      </li>
    );
  });
};

export default TodoList;
