import React, { useState } from 'react';
import {signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import './Login.css';
import { Link } from 'react-router-dom';
import {auth} from '../Firebase';

function Login() {
     const [LoginEmail, setLoginEmail] = useState("");
    const [LoginPassword, setLoginPassword] = useState("");
    const [getuser, setGetUser] = useState({});
    onAuthStateChanged(auth, (currentUser)=>{
        setGetUser(currentUser);
    });
    const preventing=(e)=>{
        e.preventDefault();
    }
    const signin = async () =>{
        try{
        const user = await signInWithEmailAndPassword(auth, LoginEmail, LoginPassword);
        console.log(user);
        }catch(error){
            console.log(error.message);
        }
    };

    return (<>
        <div className="loginPage">
            <h1>Welcome To Login Page</h1>
            <form className="loginBox">
                <div className="inputField">
                    <p>Enter Your Email:</p>
                    <input type="email" placeholder="Enter Your Email" onChange={(e)=>{setLoginEmail(e.target.value)}}></input>
                </div>
                <div className="inputField">
                    <p>Enter Your Password:</p>
                    <input type="password" placeholder="Enter Password" onChange={(e)=>{setLoginPassword(e.target.value)}}></input>
                </div>
                <p style={{ fontSize: '.7rem' }}>By continuing, you agree to Yourkart's Terms of Use and Privacy Policy.</p>
                <button onClick={signin} onSubmit={preventing}>Submit</button>
            </form >
            <div className="SignUp" style={{ color: 'orange' }}>
                <span>New To YourCart? </span><span><Link style={{ color: 'orange' }} to="/register">Sign Up</Link></span>
            </div>
            <div className="SignUp">
                <Link to='/homepage'>Skip Logging In</Link>
            </div>
        </div>
    </>
    )
}

export default Login;
