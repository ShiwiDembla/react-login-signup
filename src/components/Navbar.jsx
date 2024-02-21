// import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import {useAuth} from '../store/auth-store';

const Navbar = () => {
    const {isLoggedIn} = useAuth()
return(
    <header>
      <div className="container">
        <div className="logo">
            <a href="/home"> Shiwani Dembla {Number(isLoggedIn)}</a>
            </div>  
       <nav>
        <ul>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/services" >Services</NavLink>
            <NavLink to="/contact">Contact</NavLink>
           
            {isLoggedIn ? 
            
            <NavLink to="/logout">Logout</NavLink> : 
            <>
             <NavLink to="/signup">Signup</NavLink>
            <NavLink to="/login">Login</NavLink>
            </>
}
        </ul>
        </nav>
        </div>
    </header>
)
}

export default Navbar;