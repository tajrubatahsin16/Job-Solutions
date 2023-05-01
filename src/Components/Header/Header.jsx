import React from "react";
import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <h1>Job Solutions</h1>
            <nav className="navbar">
                <Link to="/">Home</Link>
                <Link to="/statistics">Statistics</Link>
                <Link to="/jobs">Applied Jobs</Link>
                <Link to="/blog">Blog</Link>
            </nav>
            <button className="btn-apply">Start Applying</button>
        </div>
    );
};

export default Header;