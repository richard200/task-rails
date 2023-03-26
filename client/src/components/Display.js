import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo"

function Todos() {
  let [todo, setTodo] = useState([])
  let [query, setQuery] = useState("")
  useEffect(() => {
    fetch("http://localhost:3000/todos", {
        method: "GET",
        crossorigin: true,
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json"
          },
    })
      .then((resp) => resp.json())
      .then(todo => setTodo(todo))
  }, [query])
  return (
    <div>
     
      <TodoList todos={todo} />
    </div>
  );
}

export default Todos;