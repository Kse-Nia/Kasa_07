import React from "react";

const Card = ({ house }) => {
  return (
    <div className="card">
      <img className="card_image" src={house.cover} alt="house" />
      <p className="card_title">{house.title}</p>
    </div>
  );
};

export default Card;
