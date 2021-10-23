import React from 'react'
import Content from './Content';
import Items from './Items/Items';
import NavBar from './NavBar';
import './HomePage.css';
import Display from './Display';

function HomePage() {
    return (
        <>
          <NavBar/>
          <Display/>
          {/* <Display/>
          <Display/>
          <Display/> */}
          <Items/>
        </>
    )
}

export default HomePage;
