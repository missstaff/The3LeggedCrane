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
          style={{
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15, 
            objectFit: "cover", 
            height: "100%", 
            width: "100%", 
          }}
        />
      </div>
      <div
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: "16px",
          width: "100%",
        }}
      >
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
