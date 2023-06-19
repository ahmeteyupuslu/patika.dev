let counter = localStorage.getItem('counter') ? Number(localStorage.getItem('counter')) : 0 //alınacak counter bilgisi number'a dönüştürüldü. bilgi yoksa 0 default olarak gelmesi sağlandı.
let counterDOM = document.querySelector('#counter')
let increaseDOM = document.querySelector('#increase')
let decreaseDOM = document.querySelector('#decrease')

increaseDOM.addEventListener("click", clickEvent)
decreaseDOM.addEventListener("click", clickEvent)

function clickEvent() {
    console.log(this.id)
    this.id == "increase" ? counter += 1 : counter -= 1
    localStorage.setItem('counter', counter) //her counter bilgisi değiştiğinde localstoragede de güncellenmesi sağlandı
    counterDOM.innerHTML = counter
}