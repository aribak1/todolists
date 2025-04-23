import React, { useState } from "react";

const Todoform = ({ addTodo }) => {
  const [task, settask] = useState("");
  const handlesubmit = (e) => {
    e.preventDefault();
    if (!task) {
      alert("please enter task");
      return;
    } else {
      addTodo(task);
      settask("");
    }
  };
  return (
    <div>
      <form action="">
        <input
          type="text"
          placeholder="Task?"
          value={task}
          onChange={(e) => {
            settask(e.target.value);
          }}
        />
        <button onClick={handlesubmit}>Add New Task</button>
      </form>
    </div>
  );
};

export default Todoform;
