// import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
return(
    <header>
      <div className="container">
        <div className="logo">
            <a href="/"> Shiwani Dembla </a>
            </div>  
       <nav>
        <ul>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/services" >Services</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/signup">Signup</NavLink>
            <NavLink to="/login">Login</NavLink>
        </ul>
        </nav>
        </div>
    </header>
)
}

export default Navbar;