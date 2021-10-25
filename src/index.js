import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBQGt-M71Xv7rCcVS3KvbRNzHqPLoHfm4s",
  authDomain: "e-commerce-c3544.firebaseapp.com",
  projectId: "e-commerce-c3544",
  storageBucket: "e-commerce-c3544.appspot.com",
  messagingSenderId: "843620204886",
  appId: "1:843620204886:web:0f6be662458c430698d6f7"
};

const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
