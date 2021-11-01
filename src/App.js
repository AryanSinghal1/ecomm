import './App.css';
import React, { useState } from 'react';
import HomePage from './components/HomePage';
import Login from './components/LoginPage/Login';
import { Switch, Route } from 'react-router';
import Signup from './components/Signup/Signup';
import Mycart from './components/Mycart';
import Wishlist from './components/Wishlist/Wishlist';
import Product from './components/Product';
function App() {
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (e) => {
    const Item = Product.find(prod=>prod.id===e.id);
    if(Item){
      setCartItems(cartItems.map(prod=>prod.id===e.id?{...Item, qty:Item.qty+1}:prod))
    }else{
      setCartItems([...cartItems, {...e,qty:1}])
    }
  };
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
          <Mycart product={cartItems} onAdd={onAdd}/>
        </Route>
      </Switch>
      <Switch>
        <Route exact path='/wishlist'>
          <Wishlist/>
        </Route>
      </Switch>
    </>
  )
}

export default App;