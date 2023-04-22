import React from "react";

const Card = (props) => {
  console.log(props);

  return (
    <div className="card">
      <img className="card_image" src={props.cover} alt="house" />
      <p className="card_title">{props.title}</p>
    </div>
  );
};

export default Card;
