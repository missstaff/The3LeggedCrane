import React, { useEffect, useState } from "react";
import CardBrew from "./CardBrew";
import { shuffle } from "../Utility/Utility";
import "../CSS/Brews.css"

import { DATA } from "../data";
import SectionHeader from "./Layout/SectionHeader";


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
    <>
      <div style={{marginBottom: 96}}>
      <SectionHeader id="brews" heading="Brews" />
      </div>
      <div className="brews-card">
        {brewItems}
      </div>
    </>
  );
};


export default Brews;