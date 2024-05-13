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

export default App
