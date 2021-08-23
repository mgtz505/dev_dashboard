import React from 'react';
import { Route, Link } from "react-router-dom";
import About from "./About";
const Header = () => {
    return (
        <div>
            <nav>
                <Link to="/about">About This App</Link>
            </nav>
            <h1>Welcome to Dev Dashboard</h1>
            <Route path="/about" component={About} />
        </div>
    );
};

export default Header;