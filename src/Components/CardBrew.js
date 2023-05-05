import React from "react";
import "../CSS/CardBrew.css"

const CardBrew = ({ index, item }) => {
  return (
    <div
      key={index}
      className="container-card-brew"
    >
      <div
        className="card-brew-image-container"
      >
        <img
          src={item.img}
          alt={item.name}
          className="card-brew-image"
        />
      </div>
      <div className="card-brew-text-container">
        <div>
          <h4 className="card-brew-title">{item.name}</h4>
        </div>
        <div>
          <p className="abv">ABV{item.abv}</p>
        </div>
      </div>
      <p className="card-brew-description">{item.description}</p>
    </div>
  );
};

export default CardBrew;
