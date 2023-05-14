import React, { useEffect, useState } from "react";
import SectionHeader from "./Layout/SectionHeader";
import ShowIf from "./ShowIf";
import { shuffle } from "../Utility/Utility";
import "../CSS/Gallery.css";

import { DATA } from "../data";

//TODO: set up database
const Gallery = () => {

  const [galleryItems, setGalleryImages] = useState([]);

  useEffect(() => {
    if (!galleryItems.length) {
      const items = [];
      for (let i = 0; i < DATA.length; i++) {
        const filteredItems = DATA[i].filter((item) => item.type !== "food" && item.img !== null);
        items.push(...filteredItems);
      }
      setGalleryImages(shuffle(items));
    }
  }, [galleryItems.length]);


  const galleryImage = galleryItems.slice(0, 16).map((item, index) => {
    return (
      <figure key={index} className="gallery-item">
        <img src={item.img} alt={item.description} />
      </figure>
    );
  });


  return (
    <>
      <ShowIf condition={true} render={() => {
        return (
          <div style={{ marginBottom: 96 }}>
            <SectionHeader id="brews" heading="Gallery" />
          </div>)
      }} />
      <div>
        <div className="gallery">
          {galleryImage}
        </div>
      </div>
    </>
  );
};


export default Gallery;