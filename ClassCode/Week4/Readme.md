
## Week 4.2 | React, effects and custom hooks - 02/07/23


**UseEffect** 


    const [counter, setCounter] = React.useState(Math.random());

    var nonStateVariable = Math.random();
    console.log(todoForToday);
    console.log(counter);
    console.log(nonStateVariable);

Output :-

![alt text](<CounterRemainsSame.png>)

counter value remained the same, even after second re-render, so we can say this Math.random() in  
const [counter, setCounter] = React.useState(Math.random());  
 only gets called the first time the render happens, that's the property of useEffect hook 

 ![alt text](<TodosChange.png>)

 from above image we can see, todos changed due to setTimeout, value of nonStateVariable also changed, **but Counter value is same and will  remain same unless i call setCounter with some other value like setCounter(123)**


gist.github.com/hkirat/7a9603709000a70125b6360d761e9d2e



## Running todosBackend

fetching all todos posted through Postman 

Output :- 

![alt text](<Todoarraylogs.png>)


You can see 5 arrays of todos in console.





