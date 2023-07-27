### Exact Prop
Switch çalışma mantığı olarak sırayla pathleri kontrol ediyor, uyuşan path ile karşılaştığında onu getiriyor. fakat bu durumda home başa yazıldığında her switch atıldığında yine home ekranını getiriyor. bunu engellemek için exact ekliyoruz route içine.

```javascript
<Switch>
    <route path="/" exact component={home}/>
    <route path="/about" component={about}/>
    <route path="/users" component={users}/>
</Switch>
```
### URL Parametreleri
