import axios from 'axios';

async function getUserData(Number){
        const User = await axios(`https://jsonplaceholder.typicode.com/users/$(Number)`);
        const Post = await axios(`https://jsonplaceholder.typicode.com/posts?userID=$(Number)`);
        then(response=>{
        console.log("User", User);
        console.log("Post",Post);})
        .catch(error => {console.log("error")})
};

export default getUserData; 