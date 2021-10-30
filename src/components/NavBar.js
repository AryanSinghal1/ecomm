import React from 'react';
import Nav from './Nav';
import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <>
            <div className="NavBar">
                <div className="Navigation">
                    <Link to='/homepage'><Nav val="Home" /></Link>
                    <Nav val="About" />
                    <Nav val="Contact Us" />
                </div>
                <div className="Navigation Nav2">
                    <Link to='/wishlist'><Nav val="WishList" /></Link>
                    <Link to='/cart'><div className="YourCart"><img src="https://th.bing.com/th/id/R.6684cdc1428f0d05e6856bcfb24fbba6?rik=A56sKO21j5qhZg&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2016%2f04%2fCart-PNG-HD.png&ehk=5%2bAlVUxxMKZd0va1b05fjsc6iux3eiFoqu9qakOCYLY%3d&risl=&pid=ImgRaw&r=0" alt="My Cart"></img><p>My Cart</p></div></Link>
                    <Link to='/register'><Nav val="Register" style={{ float: 'left' }} /></Link>
                    <Link to='/'><Nav val="Sign In" /></Link>
                </div>
            </div>
        </>
    )
}

export default NavBar;
