import React from "react";

const Events = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginBottom: 96, marginTop: 96 }}>
            <h2 id="events" style={{ fontSize: 50, textAlign: "center" }}>EVENTS</h2>
            <img src={require("../assets/arrow.png")} style={{ height: 100, width: "25%", marginTop: -65, padding: 0 }} />
        </div>
    );
};

export default Events;
