import React, { useState } from "react";
import "./App.css";

import { TodoForm } from "./Form";
import { TodoList } from "./List";

function App() {
  const [todos, setTodos] = useState<Array<Todo>>([]);

  const addTodo: AddTodo = (newTodo) => {
    if (newTodo !== "") {
      setTodos([...todos, { text: newTodo, complete: false }]);
    }
  };

  const toggleComplete: ToggleComplete = (clickedTodo) => {
    const completedTodos = todos.map((todo) => {
      if (todo === clickedTodo) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setTodos(completedTodos);
  };

  return (
    <div className="todo">
      <header>
        <h1>To Do List: </h1>
      </header>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleComplete={toggleComplete} />
    </div>
  );
}

export default App;
