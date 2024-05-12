

Understanding how rendering happens 

UseEffect 


    const [counter, setCounter] = React.useState(Math.random());

    var nonStateVariable = Math.random();
    console.log(todoForToday);
    console.log(counter);
    console.log(nonStateVariable);

In above code - 

![alt text](<Screenshot 2024-05-12 190148.png>)

counter value remained the same, even after second re-render, so we can say this Math.random() in  
const [counter, setCounter] = React.useState(Math.random());  
 only gets called the first time the render happens, that's the property of useEffect hook 

 ![alt text](<Screenshot 2024-05-12 191654.png>)

 from above image we can see, todos changed due to setTimeout, value of nonStateVariable also changed, **but Counter value is same and will  remain same unless i call setCounter with some other value like setCounter(123)**


[gist.github.com/hkirat/7a9603709000a70125b6360d761e9d2e]()



