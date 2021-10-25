import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import './Signup.css';
import { signup } from '../Firebase';

function Signup() {
    const emailRef = useRef();
    const passwordRef = useRef();

    async function handleSignup(e) {
        await signup(emailRef.current.value, passwordRef.current.value);
        e.preventDefault();
    }
    return (
        <div className="regPage">
            <h1>Register To YourCart</h1>
            <form className="regBox">
                <div className="inputField">
                    <p>Enter Your Name:</p>
                    <input type="text" placeholder="Enter Your Name"></input>
                </div>
                <div className="inputField">
                    <p>Enter Your E-Mail:</p>
                    <input ref={emailRef} type="email" placeholder="Enter Your E-Mail"></input>
                </div>
                <div className="inputField">
                    <p>Enter Your Password:</p>
                    <input ref={passwordRef} type="password" placeholder="Enter Password"></input>
                </div>
                <div className="inputField">
                    <p>Re-Enter Your Password:</p>
                    <input type="password" placeholder="Re Enter The Same Password"></input>
                </div>
                <p style={{ fontSize: '.7rem' }}>By continuing, you agree to Yourkart's Terms of Use and Privacy Policy.</p>
                <button onClick={handleSignup}>Submit</button>
            </form>
            <div className="SignIn" style={{ color: 'orange' }}>
                <span>Already have an account?</span><span><Link style={{ color: 'orange' }} to="/">Log in</Link></span>
            </div>
        </div>

    )
}
export default Signup;
