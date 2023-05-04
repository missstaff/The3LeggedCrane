import React from "react";

const CardBrew = ({ index, item }) => {
  return (
    <div
      key={index}
      style={{
        backgroundColor: "white",
        borderRadius: 15,
        overflow: "hidden",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        width: "25%",
        padding: "16px",
    
        margin: "16px",
        transition: "transform 0.2s ease-in-out",
        transform: "translateY(0)",
        willChange: "transform",
        position: "relative",
        zIndex: "0",
      }}
    >
      <div
        style={{
          height: "100%",
          width: "100%",
          overflow: "hidden",
          marginBottom: "16px",
          height: "350px"
        }}
      >
        <img
          src={item.img}
          alt={item.name}
          style={{ height: "100%", width: "100%", objectFit: "cover", borderTopLeftRadius: 15,
          borderTopRightRadius: 15
           }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          marginBottom: "16px",
        }}
      >
        <div>
          <h4 style={{ fontSize: 25 }}>{item.name}</h4>
        </div>
        <div>
          <p style={{ fontSize: 10, fontWeight: "800", }}>ABV{item.abv}</p>
        </div>
      </div>
      <p style={{ fontSize: 15, lineHeight: "1.25" }}>{item.description}</p>
    </div>
  );
};

export default CardBrew;
