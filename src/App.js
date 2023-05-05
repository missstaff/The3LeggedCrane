import React from "react";
import "./CSS/About.css";

import About from "./Components/About";
import Gallery from "./Components/Gallery";
import ImageCarousel from "./Components/UI/ImageCarousel";
import Navigation from "./Components/Layout/Navigation";

import Footer from "./Components/Layout/Footer";
import Brews from "./Components/Brews";
import Vittles from "./Components/Vittles";
import Events from "./Components/Events";
import SectionHeader from "./Components/Layout/SectionHeader";

function App() {
  return (
    <div>
      <Navigation />
      <div>
        <ImageCarousel />
      </div>
      <div className="section-about-heading">
        <SectionHeader id="about" heading="ABOUT" />
        <SectionHeader id="gallery" heading="GALLERY" />
      </div>
      <div className="section-about">
        <div className="about-background-image">
          <About />
        </div>
        <Gallery />
      </div>
      <Brews />
      <Vittles />
      <Events />
      <div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
