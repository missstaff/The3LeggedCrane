import React from "react";
import "../../CSS/SectionHeader.css";


const SectionHeader = ({id, heading, styles}) => {

    return(
        <div className="section-heading-container" style={styles}>
          <h2 id={id} className="section-heading">{heading}</h2>
          <img src={require("../../assets/arrow.png")} style={{ height: 100, minWidth: "25%", marginTop: -65, padding: 0 }} />
        </div>
    );
};


export default SectionHeader;