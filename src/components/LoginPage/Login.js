import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {


    return (<>
        <div className="loginPage">
            <h1>Welcome To Login Page</h1>
            <form className="loginBox">
                <div className="inputField">
                    <p>Enter Your Email:</p>
                    <input type="email" placeholder="Enter Your Email"></input>
                </div>
                <div className="inputField">
                    <p>Enter Your Password:</p>
                    <input type="password" placeholder="Enter Password"></input>
                </div>
                <p style={{ fontSize: '.7rem' }}>By continuing, you agree to Yourkart's Terms of Use and Privacy Policy.</p>
                <button>Submit</button>
            </form>
            <div className="SignUp" style={{ color: 'orange' }}>
                <span>New To YourCart?</span><span><Link style={{ color: 'orange' }} to="/register">Sign Up</Link></span>
            </div>
            <div className="SignUp">
                <Link to='/homepage'>Skip Logging In</Link>
            </div>
        </div>
    </>
    )
}

export default Login;
