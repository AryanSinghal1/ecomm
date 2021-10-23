import React from 'react';
import './Display.css';
function Display() {
    return (
        <div className="Pages">
            <div className="searchBar">
                <input type="text" placeholder="Search anything you want"></input>
                <button>Search</button>
                </div>
                <div className="slideshow">
                    <img src="https://static.vecteezy.com/system/resources/previews/000/511/625/original/vector-sale-banner-big-summer-sale-sign-over-white-background.jpg" alt="img"></img>
                     <img src="https://static.vecteezy.com/system/resources/previews/000/511/625/original/vector-sale-banner-big-summer-sale-sign-over-white-background.jpg" alt="img"></img>
                    <img src="https://static.vecteezy.com/system/resources/previews/000/511/625/original/vector-sale-banner-big-summer-sale-sign-over-white-background.jpg" alt="img"></img>                </div>
                </div>
    )
}

export default Display;
