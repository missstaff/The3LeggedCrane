import React, { useEffect, useState } from "react";
import CardBrew from "./CardBrew";
import SectionHeader from "./Layout/SectionHeader";
import { getFilterdItems } from "../Utility/Utility";
import "../CSS/Brews.css"

import { DATA } from "../data";


const Brews = () => {

  const [brews, setBrews] = useState([]);

  useEffect(() => {
    const items = [];
    getFilterdItems(DATA, setBrews, "beverage");
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