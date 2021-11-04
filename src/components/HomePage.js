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
          <Categories/>
        </>
    )
}

export default HomePage;
