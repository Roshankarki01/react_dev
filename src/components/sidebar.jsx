import React from "react";
import { jsx } from "react/jsx-runtime";
import "./navbar.css"


const Sidebar = () => {
    return (
        <div className="sidebar">
            <nav>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#contact">Contact</a>
            </nav>
        </div>
    );
}

export default Sidebar;