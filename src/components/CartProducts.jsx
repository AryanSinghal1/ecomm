import React, { useState } from 'react';
import './CartProducts.css';
function CartProducts() {
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
            <img src='https://picsum.photos/200/300' alt="ProdImage"></img>
        </div>
        <div className='productinfo'>
            <h4>This is this</h4>
            <p>This is about the product</p>
            <br></br>
            <strong>This is the price</strong>
        </div>
        <div id='items'>
            <button className='btn' onClick={increase}>+</button>
            <h2>{item}</h2>
            <button className='btn'onClick={decrease}>-</button>
        </div>
        <div id='remove'>
            <button>Remove From Cart</button>
        </div>
    </div>)
}

export default CartProducts;
