import React, { useState } from "react";

function TodoForm({ onSubmit }) {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a to do"
        value={input}
        name="text"
        className="todo-input"
        onChange={handleChange}
      />
      <button className='todo-button' type="submit">Add Todo</button>
    </form>
  );
}

export default TodoForm;


