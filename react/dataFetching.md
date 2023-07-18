sıfırdan bir react uygulaması oluşturduk. ardından /components/user.js dosyası oluşturduk. bu js dosyası kullanılarak fetch edilen linkten seçtiğimiz user.name bilgisini çektik.

```javascript
import {useEffect, useState} form "react";

function Users(){
  const[users, setUsers] = useState([]);

  useEffect(()=>{
    fetch("https:/jsonplaceholder.typicode.com/users")
      .then((res => res.json())
      .then((data => setUsers(data));
    }, []);

  return(
    <div>
      <h1>Users</h1>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}

export default Users;
```

peki ya fetch edilen data yavaş bir bağlantıda görüntüleniyorsa, data gelene kadar "loading" tarzında bir ifade oluşmasını istersek ne yapmalıyız? üstteki kod bloğunu güncelleyerek devam edelim.
```javascript
import {useEffect, useState} form "react";

function Users(){
  const[users, setUsers] = useState([]);

  useEffect(()=>{
    fetch("https:/jsonplaceholder.typicode.com/users")
      .then((res => res.json())
      .then((data => setUsers(data));
      .catch((e) => console.log(e))
      .finally(() => setIsLoading(false));
    }, []);

  return(
    <div>
      <h1>Users</h1>

      {isLoading && <div>Loading...</div>}

      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}

export default Users;
```

native future ile yaptığımız şeyler başka kütüphaneler kurarak da yapabiliriz. bunlardan en çok bilinenlerden biri axios. <br>
peki ne farkı var? bunlardan biri, doğrudan body obje ile dönebilir .json kullanmaya gerek kalmaz. <br>
daha fazlası için ![LİNK] (https://www.geeksforgeeks.org/difference-between-fetch-and-axios-js-for-making-http-requests)
```javascript
import axis from 'axios'

 useEffect(()=>{
    fetch("https:/jsonplaceholder.typicode.com/users")
      .then((res => setUsers(res.data))    //json parse işleminin kullanılmamasına dair örnek
      .catch((e) => console.log(e))
      .finally(() => setIsLoading(false));
    }, []);

```
