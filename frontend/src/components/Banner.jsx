import React from "react";
import BannerImage from "../assets/banner.png";

const Banner = () => {
  return (
    <section className="banner_section">
      <img className="banner_picture" src={BannerImage} alt="banner" />
      <h1 className="banner_text">Chez vous, partout et ailleurs</h1>
    </section>
  );
};

export default Banner;
