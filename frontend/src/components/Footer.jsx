import React from "react";
import FooterLogo from "../assets/footer_logo.svg";

const Footer = () => {
  return (
    <footer className="footer_container">
      <img className="footer_container-logo" src={FooterLogo} alt="logo" />
      <p>© 2020 Kasa. All rights reserver</p>
    </footer>
  );
};

export default Footer;
