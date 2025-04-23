import React from "react";
import Todoitem from "./Todoitem";

const Todolist = ({ todos }) => {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <div key={todo.id}>
            <Todoitem todo={todo} />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Todolist;
