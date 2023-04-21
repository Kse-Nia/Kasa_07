import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <NavLink to="/">Accueil</NavLink>
      <NavLink to="/about" end>
        A Propos
      </NavLink>
    </>
  );
};

export default Navbar;
