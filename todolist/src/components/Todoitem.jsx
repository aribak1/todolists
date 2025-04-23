import React from "react";

const Todoitem = ({ todo }) => {
  return (
    <div>
      <li>
        {todo.id} {todo.task} {todo.done}
      </li>
    </div>
  );
};

export default Todoitem;
