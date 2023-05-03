import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#333",
        color: "#fff",
        padding: 10,
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gridGap: "10px",
        alignItems: "center",
        paddingLeft: 50,
        paddingRight: 50
      }}
    >
      <div>
        <img
          src={require("../../assets/3LeggedCrane_LOGO_ColorBackground.png")}
          alt="The 3 Legged Crane Logo"
          style={{ height: 100 }}
        />
        <h3 style={{ fontSize: 12, marginBottom: 10 }}>The 3 Legged Crane</h3>
        <p style={{ fontSize: 12, marginBottom: 10 }}>48329 E 1st St., Oakridge, Oregon 97463</p>
      </div>
      <div>
        <h3 style={{ fontSize: 18, marginBottom: 10, paddingLeft: 55 }}>Social Media</h3>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start" }} >
          <div style={{ padding: 10 }}><FaFacebookSquare size={50} /></div>
          <div style={{ padding: 10 }}><FaInstagramSquare size={50} /></div>
          <div style={{ padding: 10 }}><FaTwitterSquare size={50} /></div>
        </div>
        {/**social icons here */}
      </div>
      <div>
        <h3 style={{ fontSize: 18, marginBottom: 10 }}>Services</h3>
        <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
          <li style={{ fontSize: 12, marginBottom: 10 }}>Dine-In</li>
          <li style={{ fontSize: 12, marginBottom: 10 }}>Carry-Out</li>
        </ul>
        <p style={{ marginBottom: 10 }}>PLEASE CALL FOR PICK-UP</p>
        <p style={{ marginBottom: 10 }}>(541) 782-2024</p>
      </div>
      <div>
        <h3 style={{ fontSize: 18, marginBottom: 10 }}>Pub Hours</h3>
        <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
          <li style={{ fontSize: 12, marginBottom: 10 }}>Sunday: 12pm - 9pm</li>
          <li style={{ fontSize: 12, marginBottom: 10 }}>Monday: 12pm - 9pm</li>
          <li style={{ fontSize: 12, marginBottom: 10 }}>Tuesday: SHUT</li>
          <li style={{ fontSize: 12, marginBottom: 10 }}>Wednesday: 12pm - 9pm</li>
          <li style={{ fontSize: 12, marginBottom: 10 }}>Thursday: 12pm - 9pm</li>
          <li style={{ fontSize: 12, marginBottom: 10 }}>Friday: 12pm - 10pm</li>
          <li style={{ fontSize: 12, marginBottom: 10 }}>Saturday: 12pm - 10pm</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
