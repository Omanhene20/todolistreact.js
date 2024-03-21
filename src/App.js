import React from "react";
import "./style.css";
import TodoList from "./component/TodoList";

function App() {
  return (
    <div className="app">
      <h1>To Do List App!</h1>
      <TodoList />
    </div>
  );
}

export default App;
