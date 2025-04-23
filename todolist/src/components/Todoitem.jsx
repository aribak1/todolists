import React from "react";

const Todoitem = ({ todo, deletodo, toggledone }) => {
  return (
    <div>
      <li>
        {todo.id} {todo.task} {todo.done}
        <button
          style={{ backgroundColor: "red", cursor: "pointer" }}
          onClick={() => {
            deletodo(todo.id);
          }}
        >
          Delete
        </button>
        <button
          style={{ marginLeft: "1rem", backgroundColor: "green" }}
          onClick={() => {
            toggledone(todo.id, todo.done);
          }}
        >
          {" "}
          {todo.done ? "undo" : "done"}{" "}
        </button>
      </li>
    </div>
  );
};

export default Todoitem;
