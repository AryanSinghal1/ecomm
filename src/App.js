import './App.css';
import React from 'react';
import HomePage from './components/HomePage';
import Login from './components/LoginPage/Login';
import { Switch, Route } from 'react-router';
import Signup from './components/Signup/Signup';
import Mycart from './components/Mycart';
function App() {
  return (
    <>
      <Switch>
        <Route exact path='/'>
          <Login />
        </Route>
      </Switch>
      <Switch>
        <Route exact path='/register'>
          <Signup />
        </Route>
      </Switch>
      <Switch>
        <Route exact path='/homepage'>
          <HomePage />
        </Route>
      </Switch>
      <Switch>
        <Route exact path='/cart'>
          <Mycart />
        </Route>
      </Switch>
    </>
  )
}

export default App;