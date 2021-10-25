import './App.css';
import React from 'react';
import HomePage from './components/HomePage';
import Login from './components/LoginPage/Login';
import { Switch , Route } from 'react-router';
import Signup from './components/Signup/Signup';
function App() {
  return(
  <>
  <Route exact path='/'>
  <Login/>
  </Route>
  <Route exact path='/register'>
  <Signup/>
  </Route>
  <Route exact path='/homepage'>
  <HomePage/>
  </Route>
  </>
  )
}

export default App;