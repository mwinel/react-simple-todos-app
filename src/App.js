import React, { useState, useRef, useEffect } from "react";
import TodoList from "./components/TodolIst";
import uuidv4 from "uuid/v4";

const LOCAL_STORAGE_KEY = "todoApp.todos";

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === "") return;
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }];
    });
    todoNameRef.current.value = null;
  }

  function toggleTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find(todo => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  function handleClearTodos() {
    const newTodos = todos.filter(todo => !todo.complete);
    setTodos(newTodos);
  }

  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col-sm-2"></div>
          <div className="col-sm-8">
            <h3>My Todos</h3>
            <div className="todo-input pb-4">
              <input ref={todoNameRef} type="text" className="form-control" />
              <button
                onClick={handleAddTodo}
                type="button"
                className="btn btn-success px-4 my-2 mr-2 font-weight-bold"
              >
                Add Todo
              </button>
              <button
                onClick={handleClearTodos}
                type="button"
                className="btn btn-danger px-4 my-2 mr-2 font-weight-bold"
              >
                Clear Completed
              </button>
            </div>
            <div className="py-3">
              <ul className="list-group mb3">
                <TodoList
                  todos={todos}
                  toggleTodo={toggleTodo}
                />
              </ul>
            </div>
            <div>
              <em>
                {todos.filter(todo => !todo.complete).length} todos not yet
                completed.
              </em>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
