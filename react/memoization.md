gereksiz renderların önüne geçmek, daha verimli uygulamalar geliştirmek için.

### react.memo
App.js
```js
import "./App.css";
import {useState} from "react";
import Header from "./components/Header";

function App(){
    const [number, setNumber] = useState(0);

    return(
        <div className="App">
            <Header number={number < 5 ? 0 : number}/>
            <hr/>
            <h1>{number}</h1>
            <button onClick={()=>setNumber(number+1)}>Click</button>
        </div>
    );
}
export default App;
```
Header.js
```js
import React from react;

function Header({number}){
    console.log("Header component re-rendered");
    return<div>Header - {number} </div>;
}

export default React.memo(Header);
```

### useMemo
objectlerin birbirine denk olmamasından kaynaklanan probleme yöneldik. react memo kullandık fakat function içine object yerleştirdiğimiz için patladı.

App.js
```js
import "./App.css";
import {useState} from "react";
import Header from "./components/Header";
function App(){
    const [number, setNumber] = useState(0);
    const [text, setText] = useState("");
    const data = useMemo(()=>{
        return calculateObject();
    },[number]); //number değiştiğinde bu işlemi yap anlamına geliyor
    return(
        <div className="App">
            <Header data={data}/>
            <hr/>
            <h1>{number}</h1>
            <button onClick={()=>setNumber(number+1)}>Click</button>
            <br/>
            <br/>
            <input value={text} onChange={({target}) => setText(target.value)} />
        </div>
    );
    }
    function calculateObject(){
        console.log("Calculating...")
        for let (i=0;i<100000;i++){}
        console.log("Calculating completed!");

        return{name:"Mehmet"};
    }
    export default App;
```
Header.js
```js
import React from react;

function Header({number}){
    console.log("Header component re-rendered");
    return<div>Header - {number} </div>;
}

export default React.memo(Header);
```


### useCallback
```javascript
import "./App.css";
import {useState, useMemo, useCallback} from "react";
import Header from "./components/Header";
function App(){
    const [number,setNumber] = useState(0);
    const [text,setText] = useState("");
    const increment = useCallback(() => {
        setNumber((prevState) => prevState + 1 );
    },[]);
    return(
        <div classname="App">
            <Header increment={increment} />
            <hr/>
            <h1>{number}</h1>
            <br/>
            <br/>
            <input value={text} onChange = {({target}) => setText(target.value)} />
        </div>
    );
}

export default App;
```