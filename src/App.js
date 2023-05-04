import React from "react";
import "./CSS/About.css";

import About from "./Components/About";
import Gallery from "./Components/Gallery";
import ImageCarousel from "./Components/UI/ImageCarousel";
import Navigation from "./Components/Layout/Navigation";

import Footer from "./Components/Layout/Footer";
import Brews from "./Components/Brews";
import Vittles from "./Components/Vittles";


function App() {
  return (
    <div>
      <Navigation />
      <div>
        <ImageCarousel />
      </div>
      <div className="section-about-heading">
        <div className="section-about-heading-title-container">
          <h2 id="about" className="section-about-heading-title-text">ABOUT</h2>
          <img src={require("./assets/arrow.png")} style={{ height: 100, width: "25%", marginTop: -65, padding: 0 }} />
        </div>
        <div className="section-about-heading-title-container">
          <h2 id="gallery" className="section-about-heading-title-text">GALLERY</h2>
          <img src={require("./assets/arrow.png")} style={{ height: 100, width: "25%", marginTop: -65, padding: 0 }} />
        </div>
      </div>
      <div className="section-about">
        <div className="about-background-image">
          <About />
        </div>
        <Gallery />
      </div>
      <Brews />
      <Vittles />
      <div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
