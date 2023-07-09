### State Nedir? Nasıl oluşturulur?

```js
import {userState} from "react";

function App(){
    const [stateName,setStateName] = useState("Mehmet");
    const [age, setAge] = useState(29)

    return(
        <div classname="App">
            <h2> Merhaba {name}! </h2>
            <h2> {age} </h2>

            
            <button onClick = { () => setName("Ahmet") } > Change Name </button>
            <button onClick = { () => setAge(25) } > Change Age </button>
        </div>
    )
}

export default App;
```

### Array State
ekleme yaparken öncelikle array olduğunu unutmamak lazım. ayrıca öncekilerin de silinmemesi için **...friends** kullandık.

```js
import {userState} from "react";

function App(){
    const [stateName,setStateName] = useState("Mehmet");
    const [age, setAge] = useState(29);
    const [friends, setFriends] = useState(["Ahmet","Murat"]);

    return(
        <div classname="App">
            <h2> Merhaba {name}! </h2>
            <h2> {age} </h2>

            
            <button onClick = { () => setName("Ahmet") } > Change Name </button>
            <button onClick = { () => setAge(25) } > Change Age </button>

            <hr/>

            {friends.map((friend, index) => (
                <div key={index}>{friend}</div>
            ))}

            <button onClick={()=>setFriends([...friends,'Ayşe'])}> add new friends </button>
        </div>
    )
}

export default App;
```

### Object States
```js
import {userState} from "react";

function App(){
    const [stateName,setStateName] = useState("Mehmet");
    const [age, setAge] = useState(29);
    const [friends, setFriends] = useState(["Ahmet","Murat"]);
    const [adress, setAdress] = useState ({title : "istanbul", zip : 34092 });

    return(
        <div classname="App">
            <h2> Merhaba {name}! </h2>
            <h2> {age} </h2>

            
            <button onClick = { () => setName("Ahmet") } > Change Name </button>
            <button onClick = { () => setAge(25) } > Change Age </button>

            <hr/>

            {friends.map((friend, index) => (
                <div key={index}>{friend}</div>
            ))}

            <button onClick={()=>setFriends([...friends,'Ayşe'])}> add new friends </button>

            <h2> adress </>
            <div>
                {adress.title} {adress.zip}
            </div>

            </br>

            <button onclick = {() => setAdress({...adress, zip:45642})}>change the adress</button>


        </div>

    )
}

export default App;
```

## Sayaç Uygulaması

```js
import React from "react";

function Counter() {
    const [count,setCount] = useState(0);

    const increase = () => {
        setCount(count+1);
    }

    const decrease = () => {
        setCount(count-1);
    }

    return ()
        <div>
            <h1>{count}</h1>
            <button onClick={decrease}>Decrease</button>
            <button onClick={increase}>Increase</button>
        </div>;
    );
}

export default App;
``` 

## Re-render mantığını anlamak (react vs jsQuery)
bir state güncellerkenki temel farkı inceledik. increase durumunda 0'dan 1'e çıkarılacak bir kod yazıldı. react kullanımında sanal domda değer 1 olduğunda tekrar increase butonuna basıldığında render işlemi olmadı fakat jsQueryde 1 elde edilse dahi render edilmeye devam etti.

## Input için State Tanımı Yapmak
Temel bir şekilde halletmek istersek:
```js
import {useState} from "react";

function InputExample() {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");

    const onChangeName = (event) => setName(event.target.value);
    const onChangeSurname = (event) => setSurname(event.target.value);

    return(
        <div>
            Name <br/>
            <input value={name} onChange={onChangeName} />
            <br/>
            <br/>
            Surname
            <br/>
            <input value={surname} onChange={onChangeSurname} />
            <br/>
            <br/>
            <br/>
            {name} {surname}
        </div>
    )
}

export default InputExample;
```

Tek Fonksiyon İle Halletmek İstersek:
```js
import {useState} from "react";

function InputExample() {
    const [form, setForm] = useState({name:'',surname:''});

    const onChangeInput = (e) => {
        setForm({...form, [e.targetname]: e.target.value});
    };

    return(
        <div>
            Name <br/>
            <input name="name" value={form.name} onChange={onChangeInput}/>
            <br/>
            <br/>
            Surname
            <br/>
            <input name="surname" value={form.surname} onChange={onChangeInput}/>
            <br/>
            <br/>
            <br/>
            {form.name} {form.surname}
        </div>
    )
}
```