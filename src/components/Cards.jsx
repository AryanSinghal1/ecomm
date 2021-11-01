import React from 'react';
import './Cards.css';
function Cards(card) {
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
      <button className="Add">Add To Cart</button>
    </div>
  );
}

export default Cards;
