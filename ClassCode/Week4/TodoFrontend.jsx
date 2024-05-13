import { useEffect, useState } from 'react';
import './App.css'

function useTodos(){  // custom hook that return [StateVarible] - todos anytime todos changes after fetching from backend
  const [todos, setTodo] = useState([]); // initially there are no todos, we want them to come from server that's why empty array in useState
  // todos is a StateVariable and setTodo is a function you can call to update the StateVariable which is todo
  console.log("render")

  useEffect(() => {
    fetch("http://localhost:3000/todos",{
      method: "GET"
    }).then((response) => {
      response.json().then((data) => {
        console.log(data);  // we see in logs an array of todos
        setTodo(data);
      })
    })

    setInterval(() => {
      fetch("http://localhost:3000/todos",{
        method: "GET"
      }).then((response) => {
        response.json().then((data) => {
          console.log(data);
          setTodo(data);
        })
      })
    }, 1000)
  }, [])

  return todos;
}

function App() {

  const todos = useTodos();

  return (
    <div>
      <h1>React Todo Project</h1>
      {todos.map(todo => {
        return <div>
          {todo.id}
          {todo.title}
          {todo.description}
          <button onClick={() => {
            fetch("http://localhost:3000/todos/:id",{
              "method": "DELETE"
            })
          }}>Delete</button>
          <br />
        </div>
      })}
    </div>
  )
}

export default App