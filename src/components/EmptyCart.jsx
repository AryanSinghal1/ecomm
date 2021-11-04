import React from 'react';
import './EmptyCart.css';
import { Link } from 'react-router-dom';
function EmptyCart() {
    return (
        <div className="emptyCart">
            <h3 className="cartEmpty">Your Cart is Empty</h3>
            <Link to='/homepage'><button className="emptyButton">Continue Shopping</button></Link>
        </div>
    )
}

export default EmptyCart;
