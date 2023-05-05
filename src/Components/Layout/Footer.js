import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { useClosestMedia } from "../../hooks/useClosestMedia";
import { useMediaQuery } from "../../hooks/useMediaQuery ";
import { address, faceBookHandle, instagramHandle, phoneNumber, twitterHandle } from "../../Config/constants";
import "../../CSS/Footer.css";

const Footer = () => {
  const closestMedia = useClosestMedia({
    queries: ["xs", "sm", "md", "lg", "xl", "2xl"],
  });

  const isLargeScreen = useMediaQuery("lg");
  const isMediumScreen = useMediaQuery("md");
  const isSmallScreen = useMediaQuery("sm");
  const isExtraSmallScreen = useMediaQuery("xs");

  return (
    <footer className="footer-container">
      <div >
        <img
          src={require("../../assets/3LeggedCrane_LOGO_ColorBackground.png")}
          alt="The 3 Legged Crane Logo"
          className="footer-image"
          style={{margin: 10}}
        />
        <h3 className="footer-heading-tertiery">The 3 Legged Crane</h3>
        <p className="footer-text">{address}</p>
      </div>
      <div>
        <h3
          className="footer-heading-tertiery"
         style={{textAlign: "left", paddingLeft: 10, paddingRight: 10}}
        >
          Social Media
        </h3>
        <div
          style={
            isSmallScreen
              ? { display: "flex", flexDirection: "row", alignItems: "center" }
              : { display: "flex", flexDirection: "row", justifyContent: "center" }
          }
        >
          <a href={faceBookHandle} className="social-icons"><FaFacebookSquare size={isSmallScreen || isExtraSmallScreen ? 25 : 50} color="white" /></a>
          <a href={instagramHandle} className="social-icons"><FaInstagramSquare size={isSmallScreen || isExtraSmallScreen ? 25 : 50} color="white" /></a>
          <a href={twitterHandle} className="social-icons"><FaTwitterSquare size={isSmallScreen || isExtraSmallScreen ? 25 : 50} color="white" /></a>
        </div>
      </div>
      <div style={isSmallScreen ? { textAlign: "center" } : {}}>
        <h3 className="footer-heading-tertiery">Services</h3>
        <ul className="footer-unordered-list">
          <li className="footer-text">Dine-In</li>
          <li className="footer-text">Carry-Out</li>
        </ul>
        <p className="footer-text">PLEASE CALL FOR PICK-UP</p>
        <p className="footer-text">
          <a
            style={{ color: "white", textDecoration: "none" }}
            href={`tel:${phoneNumber}`}
          >

            {phoneNumber}
          </a>
        </p>
      </div>
      <div style={isSmallScreen ? { textAlign: "center" } : {}}>
        <h3 className="footer-heading-tertiery">Pub Hours</h3>
        <ul className="footer-unordered-list">
          <li className="footer-text">Sunday: 12pm - 9pm</li>
          <li className="footer-text">Monday: 12pm - 9pm</li>
          <li className="footer-text">Tuesday: SHUT</li>
          <li className="footer-text">Wednesday: 12pm - 9pm</li>
          <li className="footer-text">Thursday: 12pm - 9pm</li>
          <li className="footer-text">Friday: 12pm - 10pm</li>
          <li className="footer-text">Saturday: 12pm - 10pm</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
