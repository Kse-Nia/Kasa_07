import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/LOGO.svg";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar_logo">
          <img src={Logo} className="navbar_logo-image" alt="Kasa" />
        </div>
        <div className="navbar_links">
          <ul>
            <li>
              <Link className="navbar_links-link" to="/">
                Accueil
              </Link>
            </li>
            <li>
              <Link className="navbar_links-link" to="/about">
                A Propos
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
