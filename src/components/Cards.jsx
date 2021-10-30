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
        <h4>{card.title}</h4>
        <p>⭐⭐⭐⭐⭐</p>
        <p>{card.description}</p>
      </div>
      </div>
      <button className="Add" onClick={handleClick}>Add To Cart</button>
    </div>
  );
}

export default Cards;
