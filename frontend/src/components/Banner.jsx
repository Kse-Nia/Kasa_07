import React from "react";
import BannerImage from "../assets/banner.png";

const Banner = ({ picture, text }) => {
  return (
    <section className="banner_section">
      <img
        className="banner_picture"
        /* src={BannerImage} */ src={picture}
        alt="banner"
      />
      {/*  <h1 className="banner_text">Chez vous, partout et ailleurs</h1> */}
      <h1 className="banner_text">{text}</h1>
    </section>
  );
};

export default Banner;
