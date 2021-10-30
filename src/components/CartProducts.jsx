import React, { useState } from 'react';
import './CartProducts.css';
function CartProducts(prod) {
    const [item,setItem] = useState(0);
    const decrease=()=>{
        if(item>0){
        setItem(item-1);
        }
        else{
            console.log('error');
        }
    }
    const increase=()=>{
        setItem(item+1);
    }
    return (
    <div className='products'>
            <div className='productImages'>
            <img src={prod.image} alt="ProdImage"></img>
        </div>
        <div className='productinfo'>
            <h4>{prod.heading}</h4>
            <p>{prod.about}</p>
            <br></br>
            <strong>{prod.price}</strong>
        </div>
        <div id='items'>
            <button className='btn' onClick={increase}>+</button>
            <h2>{item}</h2>
            <button className='btn'onClick={decrease}>-</button>
        </div>
            <button id='remove'>Remove</button>
    </div>)
}

export default CartProducts;
