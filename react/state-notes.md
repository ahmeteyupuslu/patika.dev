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
ekleme yaparken öncelikle array olduğunu unutmamak lazım. ayrıca öncekilerin de silinmemesi için ...friends kullandık.

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


