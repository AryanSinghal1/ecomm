import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";

function Signup() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ReEnter, setReEnter] = useState("");
  const [ErrorMessage, setErrorMessage] = useState("");
  const register = async () => {
    if (Password === ReEnter) {
      setErrorMessage("");
      try {
        const user = await createUserWithEmailAndPassword(
          auth,
          Email,
          Password
        );
        console.log(user);
      } catch (error) {
        console.log(error.message);
      }
    } else if (Password !== ReEnter) {
      setErrorMessage("Paswords Do Not Match");
    }
  };
  const formSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="regPage">
      <h1 style={{ color: "white" }}>Register To YourCart</h1>
      <form className="regBox" onSubmit={formSubmit}>
        <div className="inputField">
          <p>Enter Your Name:</p>
          <input type="text" placeholder="Enter Your Name"></input>
        </div>
        <div className="inputField">
          <p>Enter Your E-Mail:</p>
          <input
            type="email"
            placeholder="Enter Your E-Mail"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
        </div>
        <div className="inputField">
          <p>Enter Your Password:</p>
          <input
            type="password"
            placeholder="Enter Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
        </div>
        <div className="inputField">
          <p>Re-Enter Your Password:</p>
          <input
            type="password"
            placeholder="Re Enter The Same Password"
            onChange={(e) => {
              setReEnter(e.target.value);
            }}
          ></input>
        </div>
        <span className="error">{ErrorMessage}</span>
        <p style={{ fontSize: ".7rem" }}>
          By continuing, You agree to Yourkart's Terms of Use and Privacy
          Policy.
        </p>
        <button
          style={{
            backgroundColor: "orange",
            color: "white",
            fontSize: "1rem",
            border: "none",
            cursor: "pointer",
          }}
          onClick={register}
        >
          Register
        </button>
      </form>
      <div className="SignIn" style={{ color: "orange" }}>
        <span>Already have an account?</span>
        <span>
          <Link style={{ color: "orange" }} to="/">
            Log in
          </Link>
        </span>
      </div>
    </div>
  );
}
export default Signup;
