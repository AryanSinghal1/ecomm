import React from 'react';
import Cards from './Cards';
import './Content.css';
function Content() {
    return (
        <div className="mainPage">
          <div className="mainCont">
          <h2>Hello</h2>
          <p>Welcome To My Page...</p>
          <button>Click here to apply</button>
          </div>
          <div className="viewBox">
          <Cards title='This is A Card' description='Tell more about this' image="https://picsum.photos/seed/picsum/200/300"/>
        </div>
        </div>
    )
}

export default Content;
