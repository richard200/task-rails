import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo"

function Todos(todoo) {
    let [id, Setid] = useState("")
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

  function handleDeleteClick(e) {
    e.preventDefault();
    fetch(`http://localhost:3000/todos/delete/${todoo.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
      
      }),
    }).then((r) => r.json())
    .then((data) => {
     Setid(id)
   
    });


  }



  return (
    <div>
     
      <TodoList todos={todo} />

      <button className="btn btn-danger" onClick={handleDeleteClick}>
            <span role="img" aria-label="delete">
            Delete Meme:  🗑
            </span>
          </button>
    </div>
  );
}

export default Todos;