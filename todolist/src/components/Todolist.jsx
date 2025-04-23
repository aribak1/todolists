import React from "react";
import Todoitem from "./Todoitem";

const Todolist = ({ todos, deletodo, toggledone }) => {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <div key={todo.id}>
            <Todoitem todo={todo} deletodo={deletodo} toggledone={toggledone} />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Todolist;
