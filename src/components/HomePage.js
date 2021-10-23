import React from 'react'
import Items from './Items/Items';
import NavBar from './NavBar';
import './HomePage.css';
import Display from './Display';

function HomePage() {
    return (
        <>
          <NavBar/>
          <Display/>
          <Items/>
        </>
    )
}

export default HomePage;
