import React, { useState } from "react";

function Todo({ todo, completeTodo, updateTodo, deleteTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);
  const [todoColor, setTodoColor] = useState(getRandomColor());

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    updateTodo(todo.id, newText);
    setIsEditing(false);
  };

  return (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      style={{ backgroundColor: todoColor }}
    >
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        <div onClick={() => completeTodo(todo.id)}>{todo.text}</div>
      )}
      <div className="icons">
        {!isEditing && (
          <>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </>
        )}
        {isEditing && <button onClick={handleSave}>Save</button>}
      </div>
    </div>
  );
}

export default Todo;
