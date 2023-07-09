#Props

```js
function App(){
    return(
        <>
            <User
                name="Mehmet"
                surname = " Seven"
                age = {29}
                isLoggedIn = {true}
                adress = {{
                    title: "Ataşehir/İstanbul",
                    zip: "34587",
                }}
            />
    </>
    );
}
```


```js
import Protypes from "prop-types";

User.proptypes = {
    name = Proptypes.string,
    age = Proptypes.number,
}
```

Aşağıdaki gibi isRequired kullanarak değer girilmediğinde hata çıkmasını engelliyoruz.
```js
age = Proptypes.number.isRequired
```
Farklı birden fazla type alabilmesi için:
```js
Proptypes.oneofType([Proptypes.number, Proptypes.string])
```
Shape ile çoklu yapıları düzenleme
```js
    adress: PropTypes.shape({
        title: Proptypes.string,
        zip: PropTypes.number,
    })
```

default props ile değer girilmediğinde varsayılacak değerleri belirleyebiliriz. User function'ı için örnek:
```js
User.defaultProps = {
    isLoggedIn= false
}
```

