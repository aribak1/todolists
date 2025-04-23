import React, { useEffect, useState } from "react";
import Todoform from "./components/Todoform";
import supabase from "./Superbaseclient.js";
import Todolist from "./components/Todolist.jsx";
import Todofilter from "./components/Todofilter.jsx";

const App = () => {
  const [todos, settodos] = useState([]);
  const [filter, setfilter] = useState("showall");

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

  const filtertodos = todos.filter((todo) => {
    if (filter === "incomplete") {
      return !todo.done; //whatever the state false will show in front end
    }
    if (filter === "completed") {
      return todo.done;
    }
    return true;
  });

  return (
    <div>
      <Todoform addTodo={addTodo} />
      <Todofilter filters={filter} setfilters={setfilter} />
      <Todolist
        todos={filtertodos}
        deletodo={deletetodo}
        toggledone={toggledone}
      />
    </div>
  );
};

export default App;
