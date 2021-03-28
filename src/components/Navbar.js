import React from 'react';
import { Link } from 'react-router-dom';
import myspotify from '../images/myspotify.png'

const Navbar = () => {

    return (
            <nav className="nav-bar">
                <Link to="/">
                    <img
                        src={myspotify}
                        alt="home"
                    />
                </Link>
                <ul>
                    <li className="active">
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/categories">Categories</Link>
                    </li>
                </ul>
            </nav>
    );
};

export default Navbar;