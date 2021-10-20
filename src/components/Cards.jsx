import React from 'react';
import './Cards.css';
function Cards(card) {
    return (
        <div className='cards'>
          <div className="product"><img src={card.image}></img></div>
          <div className="Info"><h4>{card.title}</h4>
          <p>{card.description}</p>
          </div>
          <div className="Add"><a href="#">Add To Cart</a></div>
        </div>
    );
}

export default Cards;
