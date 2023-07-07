/*
setTimeout(() => { console.log("merhaba"); }, 2000); -----  2 saniye sonra çalışacak
setInterval(() => { console.log("merhaba") }, 1000)  -----  saniyede 1 tekrar çalışacak

const sayHi = () => { console.log("merhaba") };

const sayHi = (cb) => { cb(); };

---------------async kullanmadan sıralı fetc---------------
import fetch from "node-fetch";
fetch("link")
    .then((data) => data.json())
    .then((users) => {
        console.log(users);
        fetch("link")
            .then((data) => data.json())
            .then((posts) => {
                console.log(posts);
                fetch("link")
                    .then((data) => data.json())
                    .then((users) => console.log(data));
            });
    });

--------------async ile sıralı fetch-------------------

async function getData() {
    const users1 = await (await fetch("link")).json();
    const users2 = await (await fetch("link")).json();
    const users3 = await (await fetch("link")).json();
    console.log(users1);
    console.log(users2);
    console.log(users3);
}

-----   anonim fonksiyon?
(()=>{
    console.log(selam);
})();




---------------axios kullanımı---------------

import axios from "axios";
async function getData() {
    const users1 = await axios("link");
    const users2 = await axios("link");
    const users3 = await axios("link");
    console.log(users1);
    console.log(users2);
    console.log(users3);
}


//-------------------promise kullanımı-------------------------
const getComments = () => {
    return new Promise(async (resolve, reject) => {
        const { data } = await axios("link");
        resolve(data);
    });
};
const getPosts = (post_id) => {
    return new Promise(async (resolve, reject) => {
        const { data } = await axios("link" + post_id);
        resolve(data);
    });
};

(async () => {
    try {
        const users = await getUsers();
        const posts = await getPost(1);

        console.log(users);
        console.log(post);
    }
    catch (e) {
        console.log(e)
    }
})();

bütün promiseları çalıştırma:
Promise.all([getUsers(),getPost(1)])
    .then(console.log);
    .catch(console.log);





---------------ARRAY FONKSİYONLARI---------------
    push
    user.push("newitem");       listenin sonuna newitem ekledik.

    map
    user.map((item=>{console.log(item.name)})       arraydeki her item elemanının name değerini yazdırdık.

    find
    user.find((item)=>item.name==="Mehmet"&&item.age>20);       arrayleri alıyo bulduğu an ilkini return

    filter
    user.filter(({name,age}) => name === "Mehmet" && age<20);   bütün kriterlere uyanlar dönüyor

    some
    user.some((item)=>item.age===11);       kriterlere herhangi biri uyuyorsa true

    every
    user.every((item)=>item.age>20);        kriterlere hepsi uyuyorsa true

    includes
    isIncludes = meyveler.includes("portakal");     var mı yok mu? kontrol ediyoruz.


*/
