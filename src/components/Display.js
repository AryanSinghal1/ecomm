import React from "react";
import "./Display.css";
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
        {/* <div className="urCart"><h3 className="tag">YourCart</h3></div> */}
        <div className="slshow">
          <div className="slideshow">
            <div className="slide">
              <img
                className="images"
                src="https://img.wallpapersafari.com/desktop/1680/1050/70/10/VQWxKr.jpg"
                alt="img"
              />
            </div>
            <div className="slide">
              <img
                className="images img2"
                src="https://img.wallpapersafari.com/desktop/1680/1050/2/33/eLN2hs.jpg"
                alt="img"
              />
            </div>
            <div className="slide">
              <img
                className="images"
                src="https://img.wallpapersafari.com/desktop/1680/1050/31/21/sWa4bR.jpg"
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Display;
