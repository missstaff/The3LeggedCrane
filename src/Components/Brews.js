import React, { useEffect, useState } from "react";
import { shuffle } from "../Utility/Utility";
import { DATA } from "../data";
import CardBrew from "./CardBrew";


const Brews = () => { 
    const [brews, setBrews] = useState([]);

useEffect(() => {
    const items = [];
    for (let i = 0; i < DATA.length; i++) {
      const filteredItems = DATA[i].filter((item) => item.type === "beverage");
      items.push(...filteredItems);
    }
    setBrews(shuffle(items));
}, [brews.length]);

const brewItems = brews.map((item, index) => {
    return (
     <CardBrew item={item} key={index} />
    );
  });

  return (
    <div>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginBottom: 96 }}>
          <h2 id="brews" style={{ fontSize: 50, textAlign: "center" }}>FEATURED BREWS</h2>
          <img src={require("../assets/arrow.png")} style={{ height: 100, width: "25%", marginTop: -65, padding: 0 }} />
        </div>
    <div style={{display:"flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
    {brewItems}
    </div>
    </div>
  );
};





export default Brews;