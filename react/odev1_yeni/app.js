import axios from "axios";
import prompt from "prompt";

const getUserData = async () => {
    prompt.start();
    const { number } = await prompt.get('number');

    const userData = await axios({
        method: "get",
        url: `https://jsonplaceholder.typicode.com/users/${number}`,
    })
        .then((res) => {
            console.log(res.data);
        })
        .catch((err) => {
            console.error(err);
        });

    const postData = await axios({
        method: "get",
        url: `https://jsonplaceholder.typicode.com/posts?userId=${number}`,
    })
        .then((res) => {
            console.log(res.data);
        })
        .catch((err) => {
            console.error(err);
        });
}

export default getUserData;

