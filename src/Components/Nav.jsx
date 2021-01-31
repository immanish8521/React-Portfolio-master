import React from 'react';
import { NavLink } from "react-router-dom";
import '../assests/style/Nav.css';

const Nav = () => {

    

    return (
        <div className="nav-bar">
            <div className="title">
                <h1>UpCareer</h1>
            </div>
            <nav className="nav-link">
                <ul>
                    <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                    <li><NavLink exact to="/about" activeClassName="active">About</NavLink></li>
                    <li><NavLink exact to="/service" activeClassName="active">Service</NavLink></li>
                    <li><NavLink exact to="/contact" activeClassName="active">Contact</NavLink></li>
                    
                </ul>
            </nav>
        </div>
    )
}

export default Nav;
