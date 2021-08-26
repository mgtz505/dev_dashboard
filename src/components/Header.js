import React from 'react';
import { Route, Link } from "react-router-dom";
import About from "./About";
import Me from "./Me";
import "../styles/header.css";

const Header = () => {
    return (
        <div>
            <nav className="nav-bar">
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/about">About This App</Link>
                <Link className="link" to="/me">About Me</Link>
            </nav>
            <Route path="/about" component={About} />
            <Route path="/me" component={Me} />
        </div>
    );
};

export default Header;