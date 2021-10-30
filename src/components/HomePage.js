import React from 'react';
import NavBar from './NavBar';
import './HomePage.css';
import Display from './Display';
import Features from './Features';
import Categories from './Categories';

function HomePage() {
    return (
        <>
          <NavBar/>
          <Display/>
          <Features/>
          <Categories Cat='A'/>
          <Categories Cat='B'/>
          <Categories Cat='C'/>
        </>
    )
}

export default HomePage;
