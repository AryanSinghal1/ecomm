import React from 'react'
import CartProducts from './CartProducts';
import NavBar from './NavBar';
import './MyCart.css';
function Mycart() {
    return (
        <div className='shoppingCart'>
            <NavBar />
            <h2>Welcome to your Cart</h2>
            <div className='Products'>
                <CartProducts/>
                <CartProducts/>
                <CartProducts/>
                <CartProducts/>
                <CartProducts/>
            </div>
            <div ></div>
        </div>
    )
}

export default Mycart;
