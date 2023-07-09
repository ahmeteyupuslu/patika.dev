#Props
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



