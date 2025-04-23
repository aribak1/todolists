import React, { useEffect, useState } from "react";
import Todoform from "./components/Todoform";
import supabase from "./Superbaseclient.js";
import Todolist from "./components/Todolist.jsx";

const App = () => {
  const [todos, settodos] = useState([]);

  async function addTodo(task) {
    const { error } = await supabase.from("todo").insert([{ task }]);
    if (error) {
      alert(error.message);
      return;
    } else {
      alert("task added successfully");
    }
  }
  useEffect(() => {
    fetchtask();
  }, []);
  async function fetchtask() {
    const { data, error } = await supabase.from("todo").select("*");
    if (error) {
      alert(error.message);
      return;
    } else {
      settodos(data);
    }
  }
  return (
    <div>
      <Todoform addTodo={addTodo} />
      <Todolist todos={todos} />
    </div>
  );
};

export default App;
