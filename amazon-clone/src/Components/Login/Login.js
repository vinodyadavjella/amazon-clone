import React, {useState} from 'react';
import "../Login/Login.css";
import {Link, useHistory} from "react-router-dom";
import {auth} from "../../Utilities/Firebase/Firebase";

function Login() {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const login = event => {
        event.preventDefault(); //this stops the page refresh

        //login logic
        auth.signInWithEmailAndPassword(email, password)
        .then((auth) => {
            //redirect to home page
            history.push("/");
        })
        .catch((e) => alert(e.message));
    }

    const register = event => {
        event.preventDefault();//this stops the page refresh

        //register logic
        auth.createUserWithEmailAndPassword(email, password)
        .then(auth => {
            //created a user and logged in, redirect to home page
            history.push("/");
        })
        .catch((e) => (e.message));
    }

    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
            </Link>

            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email" />

                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type= "password"/>

                    <button onClick={login} type="submit" className="login__signInButton">Sign in</button>
                </form>

                <p>
                    By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                </p>

                <button onClick={register} className="login__registerButton"> Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
