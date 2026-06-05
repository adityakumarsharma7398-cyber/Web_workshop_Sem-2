import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="nav-logo border">
                <Link to="/">
                    <div className="logo"></div>
                </Link>
            </div>

            <div className="nav-address border">
                <p className="add-first">Delivering to Ghaziabad</p>
                <div className="add-icon">
                    <p className="add-second">Update location</p>
                </div>
            </div>

            <div className="nav-search">
                <select className="search-select">
                    <option>All</option>
                </select>
                <input placeholder="Search Amazon.in" className="search-input" />
                <div className="search-icon">
                    🔍
                </div>
            </div>

            <div className="nav-signin border">
                <p><span><Link to="/signin">Hello, sign in</Link></span></p>
                <Link to="/signin"><p className="nav-second">Account & Lists</p></Link>
            </div>

            <div className="nav-return border">
                <p><span>Returns</span></p>
                <p className="nav-second">& Orders</p>
            </div>

            <div className="nav-cart border">
            </div>
        </div>
    );
};

export default Navbar;
