import React, { useState, useEffect } from 'react';
import '../../CSS/Login.css';
import { useHistory} from "react-router-dom";

function Login() {
    console.log("login")
    const history = useHistory();
    const [dataLogin, setDataLogin] = useState({
        username: "",
        password: "",
    })

    function handle(event) {
        const newdata = { ...dataLogin };
        newdata[event.target.id] = event.target.value;
        setDataLogin(newdata);
    }

    return (
        <div className="center">
            <h1>Login</h1>
            <form>
                <div className="txt_field">
                    <input onChange={handle} id="username" value={dataLogin.username} type="text" required />
                    <span></span>
                    <label>Username</label>
                </div>
                <div className="txt_field">
                    <input onChange={handle} id="password" value={dataLogin.password} type="password" required />
                    <span></span>
                    <label>Password</label>
                </div>
                <input type="submit" value="Login" />
            </form>
        </div>
    );
}

export default Login;