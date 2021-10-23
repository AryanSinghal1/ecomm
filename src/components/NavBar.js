import React from 'react';
import Nav from './Nav';
import './NavBar.css';

function NavBar() {
    return (
        <>
        <div className="NavBar">
        <div className="Navigation">
           <Nav val="Home"/>
            <Nav val="About"/>
            <Nav val="Contact Us"/>
            </div>
                <div className="Nav2">
                <div className="MyCart"><img src="https://th.bing.com/th/id/R.6684cdc1428f0d05e6856bcfb24fbba6?rik=A56sKO21j5qhZg&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2016%2f04%2fCart-PNG-HD.png&ehk=5%2bAlVUxxMKZd0va1b05fjsc6iux3eiFoqu9qakOCYLY%3d&risl=&pid=ImgRaw&r=0" alt="My Cart"></img><p>My Cart</p></div>
                <Nav val="Register"/>
                <Nav val="Sign In"/>
            </div>
       </div>
        </>
    )
}

export default NavBar;
