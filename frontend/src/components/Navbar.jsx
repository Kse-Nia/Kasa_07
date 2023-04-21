import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/LOGO.svg";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar_logo">
          <img src={Logo} className="navbar_logo-image" alt="logo" />
        </div>
        {/*    <NavLink className="navbar-link" to="/">
          Accueil
        </NavLink>
        <NavLink className="navbar-link" to="/about" end>
          A Propos
        </NavLink> */}
      </nav>
    </>
  );
};

export default Navbar;
