import React from "react";
import { useState } from "react";
function todo() {
  const [Todos, setTodos] = useState({
    title: "gym",
    description: "hit the gym regularly",
  });

  function addTodo() {
    let newArray = [];
    for (let i = 0; i < Todos.length; i++) {
      newArray.push(todos[i]);
    }
  }
  return <div>setTodos(newArray);</div>;
}

export default todo;
