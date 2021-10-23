import React from 'react';
import './Cards.css';
function Cards(card) {
    return (
        <div className='cards'>
          <img src={card.image}></img>
          <div className="Info">
            <h4>{card.title}</h4>
            <p>⭐⭐⭐⭐⭐</p>
          <p>{card.description}</p>
          </div>
          <div className="Add"><a href="_blank">Add To Cart</a></div>
          </div>
    );
}

export default Cards;
