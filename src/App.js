import React from "react";

import About from "./Components/About";
import Gallery from "./Components/Gallery";
import ImageCarousel from "./Components/UI/ImageCarousel";
import Navigation from "./Components/Layout/Navigation";

import "./CSS/About.css";
import Footer from "./Components/Layout/Footer";
import Brews from "./Components/Brews";


function App() {
  return (
    <div>
      <Navigation />
      <div>
        <ImageCarousel />
      </div>
      <div className="section-about-heading">
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", }}>
          <h2 id="about" style={{ fontSize: 50, textAlign: "center" }}>ABOUT</h2>
          <img src={require("./assets/arrow.png")} style={{ height: 100, width: "25%", marginTop: -65, padding: 0 }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", }}>
          <h2 id="gallery" style={{ fontSize: 50, textAlign: "center" }}>GALLERY</h2>
          <img src={require("./assets/arrow.png")} style={{ height: 100, width: "25%", marginTop: -65, padding: 0 }} />
        </div>
      </div>
      <div className="section-about">
        <div className="about-background-image">
          <About />
        </div>
        <Gallery />
      </div>
     <div style={{marginBottom: 96}}>
     <Brews />
     </div>
      <Footer />
    </div>
  );
};

export default App;
