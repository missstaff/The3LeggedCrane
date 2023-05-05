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
        <div className="event-container">
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginBottom: 96, marginTop: 96 }}>
                <h2 id="events" style={{ fontSize: 50, textAlign: "center" }}>EVENTS</h2>
                <img src={require("../assets/arrow.png")} style={{ height: 100, width: "25%", marginTop: -65, padding: 0 }} />
            </div>
            <ul className="event-list">
                {events.map((event) => (
                    <div>
                        <p style={{ position: "relative", top: 100, }} className="event-date">{event.day} {event.month} {event.date.split("-")[1]}</p>
                        <li className="event" key={event.id}>

                            <div className="section-event">

                                {event.img ? <div className="event-image-container">
                                    <img src={event.img} alt={event.name} style={{ height: "100%", width: "100%" }} />
                                </div> : <div style={{ height: "100%", width: "100%" }}></div>}
                                <div >
                                    <div className="event-title-container">
                                        <h3 className="event-title">{event.name}</h3>
                                    </div>
                                    <div className="event-description">
                                        <p>{event.description}</p>
                                    </div>
                                    <div>
                                        {event.link && <a href={event.link} className="event-link">Listen to {event.name}</a>}
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
