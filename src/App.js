import React from "react";
import About from "./Components/About";
import Brews from "./Components/Brews";
import Events from "./Components/Events";
import Footer from "./Components/Layout/Footer";
import Gallery from "./Components/Gallery";
import ImageCarousel from "./Components/UI/ImageCarousel";
import Navigation from "./Components/Layout/Navigation";
import SectionHeader from "./Components/Layout/SectionHeader";
import ShowIf from "./Components/ShowIf";
import Vittles from "./Components/Vittles";
import "./CSS/About.css";



function App() {
  return (
    <div>
      <Navigation />
      <div>
        <ImageCarousel />
      </div>
      <ShowIf condition={false} render={() => <div className="section-about-heading">
        <SectionHeader id="about" heading="ABOUT" />
        <SectionHeader id="gallery" heading="GALLERY" />
      </div>} />

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
