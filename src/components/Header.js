import React from 'react';
import { Link } from 'react-router-dom';
function Header (){
    
    return(
       
            <header className="header clearfix">
                <div className="header-logo">
                    <span>Let's eat</span>
                </div>
                <div className="header_desktop-content">
            
                <nav className="nav">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/restaurants">Restaurants</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </nav>
                <div className="search">
                <form>
                    <input type="search" name="search" placeholder="Search..." />
                    <button><i className="fas fa-search"></i></button>
                </form>
                </div>
            </div>
            </header>
    )
}

export default Header;