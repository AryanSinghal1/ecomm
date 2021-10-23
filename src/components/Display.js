import React from 'react';
import './Display.css';
function Display() {
    return (
        <div className="Pages">
            <div className="content">
                <form>
                <div className="searchBar">
                    <input type="text" placeholder="Search anything you want"></input>
                    <button>Search</button>
                </div>
                </form>
                <div className="slshow">
                <div className="slideshow">
                     <div className="slide">
                         <img className="images" src="https://static.vecteezy.com/system/resources/previews/000/511/625/original/vector-sale-banner-big-summer-sale-sign-over-white-background.jpg" alt="img" />
                     </div> 
                    <div className="slide">
                        <img className="images" src="https://static.vecteezy.com/system/resources/previews/000/511/625/original/vector-sale-banner-big-summer-sale-sign-over-white-background.jpg" alt="img" />
                    </div>
                    <div className="slide">
                        <img className="images" src="https://static.vecteezy.com/system/resources/previews/000/511/625/original/vector-sale-banner-big-summer-sale-sign-over-white-background.jpg" alt="img" />
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Display;
