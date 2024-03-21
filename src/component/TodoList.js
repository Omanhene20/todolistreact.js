import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const updateTodo = (todoId, newText) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === todoId) {
        return { ...todo, text: newText };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const deleteTodo = id => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-list">
      <h1>What's the plan for today?</h1>
      <TodoForm onSubmit={addTodo} />
      {todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          completeTodo={completeTodo}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;
