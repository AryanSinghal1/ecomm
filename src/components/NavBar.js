import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import Context from "../Context/Context";
import { useContext } from "react";

function NavBar() {
  const { cartItem, login } = useContext(Context);

  return (
    <>
      <div className="NavBar">
        <div className="Navigation">
          <Link to="/homepage">Home</Link>
          <a href="javascript: document.body.scrollIntoView(false);">About</a>
          <a href="javascript: document.body.scrollIntoView(false);">
            Contact Us
          </a>
        </div>
        <div className="Navigation Nav2">
          <Link to="/wishlist">WishList</Link>
          <Link to="/cart">
            <div className="YourCart">
              <img
                src="https://th.bing.com/th/id/R.6684cdc1428f0d05e6856bcfb24fbba6?rik=A56sKO21j5qhZg&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2016%2f04%2fCart-PNG-HD.png&ehk=5%2bAlVUxxMKZd0va1b05fjsc6iux3eiFoqu9qakOCYLY%3d&risl=&pid=ImgRaw&r=0"
                alt="My Cart"
              ></img>
              <p>My Cart&nbsp;</p>
              {cartItem.length > 0 && <span>{cartItem.length}</span>}
            </div>
          </Link>
          {!login && (
            <div>
              <Link to="/register">Register</Link>
              <Link to="/">Sign In</Link>
            </div>
          )}
          {login && (
            <div>
              <Link to="/logout">Log Out</Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default NavBar;
