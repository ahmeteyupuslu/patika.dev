### useEffect
-condition içinde çağırılmamalı. if vs ile hooklar kullanılmaz.
```js
import {useState,useEffect} from react
function App() {
    const[number,setNumber] = useState(0);
    const[name,setName] = useState("mehmet");

    useEffect(() =>{
        console.log("Component mount edildi!");
    }[]);
    
    useEffect(()=>{
        console.log("Name veya number güncellendi.");
    }[number,name]);

    return(
        <div className ="App">
        <h1>{number}</h1>
        <button onClick = {()=>setNumber(number+1)}>Click</button>

        <hr/>

        <h1>{name}</h1>
        <button onClick = {()=>setName("mete")}>Click</button>
        </div>
    );
}
export default App;
```


### component unmount
counter.js
```js
import {useState, useEffect} from "react";

function Counter(){
    const[number,setNumber] = useState(0);

    useEffect(()=>{
    console.log("Component mount edildi!");

    const interval = setInterval(()=> {
        setNumber((n)=>n+1);
    }, 1000);

    return()=>clearInterval(interval);
    },[]);

    useEffect(()=>{
        console.log("number state güncellendi!");
    },[number]);

    return(
        <div>
            <h1>{number}</h1>
            <button onClick={()=>   setNumber(number+1)}>Click</button>
        </div>
    );
}
export default Counter;

```