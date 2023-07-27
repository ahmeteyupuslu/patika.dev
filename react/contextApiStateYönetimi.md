# App.js
```js
import "./App.css";
import Container from "./components/Container";
import {ThemeProvider} from ."/context/ThemeContext";
import {UserProvider} from ."/context/UserContext";

function App(){
    return(
        <ThemeProvider>
            <UserProvider>
                <Container/>
            </UserProvider>
        </ThemeProvider>
    );
}
export default App;
```

# components/Profile.js
```js
import {useContext} from "react";  
import UserContext from "../context/UserContext";

function Profile() {
    const {user, setUser} = useContext(UserContext);
    const [loading, setLoading] = useState(false);
    const handleLogin = () => {
        setLoading(true);
        setTimeOut( () => {
        setUser({id:1 ,username:"mseven", bio: "lorem ipsum"});
        setLoading(false);
        },1500);
    };

    const handleLogout = () => { setUser (null) };

    return(
    <div>
        {!user && (
            <button onClick={handleLogin}>
                {loading ? "...loading" : "Login"}
            </button>
            <br/>
        )}
        <code>{JSON.stringify(user)}</code>
        {user && (
            <br/>
            <button onClick={handleLogout}>Logout</button>
        )
        }
    </div>);
}
export default Profile;
```

# components/container.js
```js
import {useContext} from "react";  
import Button from "./Button";
import header from "./Header";
import {useTheme} from "../context/ThemeContext";
import Profile from "./Profile;

function Container(){
    const {theme} = useTheme();
    return(
        <div classname={`app ${theme==="dark" ? : ""}`}>
            <Header/>
            <hr/>
            <Button/>
            <hr/>
            <Profile/>
        </div>
    );
}
export default Container;
```

# components/button.js
```js
import { useTheme } from "../context/ThemeContext";

function Button(){
    const{theme,setTheme} = useTheme();

    return(
        <div>
            Active Theme : {theme}
            <br/>
            <button onClick={()=>setTheme(theme==="light" ? "dark" : "light")}>
                Change Theme
            </button>
        </div>
    );
}
export default Button;
```

# components/header.js
```javascript
import {useTheme} from "../context/ThemeContext";

function Header() {
    const {theme,setTheme} = useTheme();
    return(
        <div>
            Active Theme: {theme}
            <br/>
            <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                Change Theme
            <button/>
        <div/>
    );
}
export default Header;
```


# context/ThemeContext.js
```javascript
import {createContext, useState, useEffect, useContext} from "react";
const ThemeContext = createContext();
export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
    useEffect(()=>{
        localStorage.setItem("theme",theme);
    },[theme]);
    const value = {
        theme,
        setTheme,
    };
    return(
        <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
    );
};
export const useTheme = () => useContext(ThemeContext);
```

# context/UserContext.js
```js
import {createContext, useState} from "react";
const UserContext = createContext();
export const UserProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const values = {user,setUser};
    return <UserContext.Provider value={values}>{children}</UserContext.Provider> 
}
export default UserContext;
```
