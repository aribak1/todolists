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
  async function deletetodo(id) {
    const { error } = await supabase.from("todo").delete().eq("id", id);
    if (error) {
      alert(error.message);
      return;
    } else {
      fetchtask();
    }
  }
  async function toggledone(id, done) {
    const { error } = await supabase
      .from("todo")
      .update({ done: !done })
      .eq("id", id);
    if (error) {
      alert(error.message);
      return;
    } else {
      fetchtask(); //refresh method eveything remain updated and refresh by it self
    }
  }

  return (
    <div>
      <Todoform addTodo={addTodo} />
      <Todolist todos={todos} deletodo={deletetodo} toggledone={toggledone} />
    </div>
  );
};

export default App;
