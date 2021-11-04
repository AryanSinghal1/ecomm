import React from 'react';
import { useContext } from 'react';
import Context from '../Context/Context';
import './Cards.css';
function Cards(card) {
  const { addCart } = useContext(Context);
  return (
    <div className='cards'>
      <div className="proDesc">
        <img src={card.image} alt={card.id}></img>
        <div className="Info">
          <h3>{card.title}</h3>
          <p>⭐⭐⭐⭐⭐</p>
          <h4>Rs. {card.price}</h4>
          <p>{card.description}</p>
        </div>
      </div>
      <button className="Add" onClick={() => addCart(card)}>Add To Cart</button>
    </div>
  );
}

export default Cards;
