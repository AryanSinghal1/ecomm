import React, { useState } from 'react';
import './Cards.css';
import Product from './Product';
function Cards(card) {
  const [cart, setCart] = useState(Product); 
  const handleClick=(props)=>{
    setCart(...cart,props);
    console.log(cart);
  };
  return (
    <div className='cards'>
      <div className="proDesc">
      <img src={card.image} alt="product"></img>
      <div className="Info">
        <h3>{card.title}</h3>
        <p>⭐⭐⭐⭐⭐</p>
        <h4>Rs. {card.price}</h4>
        <p>{card.description}</p>
      </div>
      </div>
      <button className="Add" onClick={handleClick}>Add To Cart</button>
    </div>
  );
}

export default Cards;
