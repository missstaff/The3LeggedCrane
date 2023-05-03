import React from "react";
import "../../CSS/Logo.css"; 

const Logo = () => {
    return (
        <div className="logo">
            <img src={require("../../assets/3LeggedCrane_LOGO_LightGrayShieldRS.png")} alt="Logo" />
        </div>
    );
};

export default Logo;

