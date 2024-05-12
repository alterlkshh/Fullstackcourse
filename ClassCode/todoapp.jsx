// Anytime state variable changes React re-renders


function App(){
    const [todoForToday, setTodoForToday] = React.useState({
        title: "Go to gym",
        description: "Hit gym from 7-9",
        id: 1
    });

    const [counter, setCounter] = React.useState(Math.random());

    var nonStateVariable = Math.random();
    console.log(todoForToday);
    console.log(counter);
    console.log(nonStateVariable);

    console.log("render");

    // if (ctr === 0 ) {
    //     setInterval(() => {
    //         setTodoForToday({
    //             title: "Go jim daily you mf",
    //             description: "at mrning or evening",
    //             id: 1
    //         })
    //     }, 5000)

    //     ctr = 1
    // }

    setTimeout(() => {
        setTodoForToday({
            title: "Go to gym please please please" + Math.random(),
            description: "Hit gym from 7-9",
            id: 1
        })
    }, 10000)

    return (
        <div>
            {todoForToday.title}
            <br />
            {todoForToday.description}
        </div>
    )
}

// import { useEffect, useState } from 'react';
// import './App.css'

// function useTodos(){
//   const [todos, setTodo] = useState([]);

//   console.log("render")

//   useEffect(() => {
//     fetch("http://localhost:3000/todos",{
//       method: "GET"
//     }).then((response) => {
//       response.json().then((data) => {
//         console.log(data);
//         setTodo(data);
//       })
//     })

//     setInterval(() => {
//       fetch("http://localhost:3000/todos",{
//         method: "GET"
//       }).then((response) => {
//         response.json().then((data) => {
//           console.log(data);
//           setTodo(data);
//         })
//       })
//     }, 1000)
//   }, [])

//   return todos;
// }

// function App() {

//   const todos = useTodos();

//   return (
//     <div>
//       <h1>My first react project</h1>
//       {todos.map(todo => {
//         return <div>
//           {todo.id}
//           {todo.title}
//           {todo.description}
//           <button onClick={() => {
//             fetch("http://localhost:3000/todos/:id",{
//               "method": "DELETE"
//             })
//           }}>Delete</button>
//           <br />
//         </div>
//       })}
//     </div>
//   )
// }

export default App
