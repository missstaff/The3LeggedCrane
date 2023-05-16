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
import { useClosestMedia } from "./hooks/useClosestMedia";
import { useMediaQuery } from "./hooks/useMediaQuery";
import "./CSS/About.css";



function App() {
  const closestMedia = useClosestMedia({
    queries: ["xs", "sm", "md", "lg", "xl", "2xl"],
  });

  const isLargeScreen = useMediaQuery("lg");
  const isMediumScreen = useMediaQuery("md");
  const isSmallScreen = useMediaQuery("sm");
  const isExtraSmallScreen = useMediaQuery("xs");


  return (
    <div>
      <Navigation />
      <div>
        <ImageCarousel />
      </div>
      <ShowIf condition={isLargeScreen} render={() => <div className="section-about-heading">
        <SectionHeader id="about" heading="ABOUT" />
        <SectionHeader id="gallery" heading="GALLERY" />
      </div>} />

      <div className="section-about">
        <div className="about-background-image">
          <ShowIf condition={!isLargeScreen} render={() => {
            return (
              <div style={{ marginBottom: 96, marginTop: 96 }}>
                <SectionHeader id="brews" heading="About" />
              </div>)
          }} />
          <About />
        </div>
        <ShowIf condition={!isLargeScreen} render={() => {
          return (
            <div style={{ marginBottom: 96, marginTop: 96 }}>
              <SectionHeader id="brews" heading="Gallery" />
            </div>)
        }} />
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
