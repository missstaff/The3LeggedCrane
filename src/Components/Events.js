import React, { useEffect, useState } from "react";
import "../CSS/Events.css";
import { DATA } from "../data";


const Events = () => {

    const [events, setEvents] = useState([]);

    useEffect(() => {
        if (!events.length) {
            const items = [];
            for (let i = 0; i < DATA.length; i++) {
                const filteredItems = DATA[i].filter((item) => item.type === "event");
                items.push(...filteredItems);
            }
            setEvents(items);
        }
    }, [events.length]);

    return (
        <div style={{ marginBottom: 96 }}>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginBottom: 96, marginTop: 96 }}>
                <h2 id="events" style={{ fontSize: 50, textAlign: "center" }}>EVENTS</h2>
                <img src={require("../assets/arrow.png")} style={{ height: 100, width: "25%", marginTop: -65, padding: 0 }} />
            </div>
            <ul className="event-list">
                {events.map((event) => (
                    <div>
                          <p style={{ textAlign: "center", fontSize: 50, position: "relative", top: 100, fontWeight:600, fontStyle: "italic"}}>{event.day} {event.month} {event.date.split("-")[1]}</p>
                        <li className="event" key={event.id} style={{ width: "100%" }}>
                      
                            <div className="section-event">

                                {event.img ? <div style={{ height: 350, width: 500, margin: 10, padding: 10 }}>
                                    <img src={event.img} alt={event.name} style={{ height: "100%", width: "100%" }} />
                                </div> : <div style={{ height: "100%", width: "100%" }}></div>}
                                <div >
                                    <div style={{ marginBottom: 25, padding: 10 }}>
                                        <h3 style={{ fontSize: 100, textAlign: "left", }}>{event.name}</h3>
                                    </div>
                                    <div style={{ marginBottom: 25 }} className="event-description">
                                        <p>{event.description}</p>
                                    </div>
                                    <div>
                                        {event.link && <a href={event.link} style={{ color: "#cf711f", fontSize: 15, marginLeft: 50 }}>Listen to {event.name}</a>}
                                    </div>
                                </div>
                            </div>


                        </li>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default Events;
