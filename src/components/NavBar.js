import React from 'react';
import Nav from './Nav';
import './NavBar.css';
import { Link } from 'react-router-dom';
import Context from '../Context/Context';
import { useContext } from 'react';

function NavBar() {
    const { cartItem } = useContext(Context)
    return (
        <>
            <div className="NavBar">
                <div className="Navigation">
                    <Link to='/homepage'>Home</Link>
                    <Nav val="About" />
                    <Nav val="Contact Us" />
                </div>
                <div className="Navigation Nav2">
                    <Link to='/wishlist'>WishList</Link>
                    <Link to='/cart'><div className="YourCart"><img src="https://th.bing.com/th/id/R.6684cdc1428f0d05e6856bcfb24fbba6?rik=A56sKO21j5qhZg&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2016%2f04%2fCart-PNG-HD.png&ehk=5%2bAlVUxxMKZd0va1b05fjsc6iux3eiFoqu9qakOCYLY%3d&risl=&pid=ImgRaw&r=0" alt="My Cart"></img><p>My Cart</p>{cartItem.length>0 && (<span>{cartItem.length}</span>)}</div></Link>
                    <Link to='/register'>Register</Link>
                    <Link to='/'>Sign In</Link>
                </div>
            </div>
        </>
    )
}

export default NavBar;
