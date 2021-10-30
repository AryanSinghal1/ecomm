import React from 'react';
import NavBar from '../NavBar';
import './Wishlist.css';
import Cards from '../Cards';
function Wishlist() {
    return (
        <div className='shoppingCart'>
            <NavBar />
            <h2>Welcome to your Wishlist</h2>
            <div className='item'>
            <Cards title="It is a card" description="This is Description" image="https://picsum.photos/seed/picsum/600/900" />
            <Cards title="It is a card" description="This is Description" />
            <Cards title="It is a card" description="This is Description" />
        </div>
        </div>
    )
}

export default Wishlist;
