import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Admin from './Admin';

function Login() {
    const [username] = useState("admin");
    const [password] = useState("password");

    const handleLogin = () => {
        if(username === 'admin' && password === 'password') {
            alert('Sikeres bejelentkezés!');
        } else {
            alert('Helytelen felhasználónév vagy jelszó!');
        }  
    }

    return(
        <div>
            <h1>Bejelentkezés</h1>
            <input name="username" type="text" placeholder="Felhasználónév"/>
            <input name="password" type="password" placeholder="Jelszó"/>
            <button className="btn btn-primary" onClick={handleLogin}>Bejelentkezés</button>
        </div>  
    )
}

export default Login