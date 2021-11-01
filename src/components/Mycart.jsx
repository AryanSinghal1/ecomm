import React from 'react'
import CartProducts from './CartProducts';
import NavBar from './NavBar';
import './MyCart.css';
import Product from './Product';
function Mycart() {
    return (
        <div className='shoppingCart'>
            <NavBar />
            <h2>Welcome to your Cart</h2>
            <div className='Products'>
                {Product.map((e)=>{
                    return <CartProducts image={e.image} heading={e.heading} about={e.about} price={e.price}/>
                })}
            </div>
            <div className="subtotal">
                Your total is: Rs. tPrice 
            </div>
        </div>
    )
}

export default Mycart;
