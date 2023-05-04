import React, { useEffect, useState } from "react";
import { shuffle } from "../Utility/Utility"
import { MENU } from "../data";

const Vittles = () => {

    const [dessertsSpecials, setDessertsSpecials] = useState([]);
    const [kidsBaskets, setKidsBaskets] = useState([]);
    const [nibbles, setNibbles] = useState([]);

    useEffect(() => {

        if (!dessertsSpecials.length) {
            const items = [];
            const filteredItems = MENU.filter((item) => item.type === "desserts/specials");
            items.push(...filteredItems);
            setDessertsSpecials(shuffle(items));
        }
    }, [dessertsSpecials.length]);

    useEffect(() => {
        if (!kidsBaskets.length) {
            const items = [];
            const filteredItems = MENU.filter((item) => item.type === "kids");
            items.push(...filteredItems);
            setKidsBaskets(shuffle(items));
        }
    }, [kidsBaskets.length]);

    useEffect(() => {
        if (!nibbles.length) {
            const items = [];
            const filteredItems = MENU.filter((item) => item.type === "nibbles");
            items.push(...filteredItems);
            setNibbles(shuffle(items));
        }
    }, [nibbles.length]);

    const displayNibbles = nibbles.map((item, index) => {
        return (
            <div style={{ marginLeft: 50 }} key={index}>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <h4 style={{ fontSize: 25, marginBottom: 10 }}>{item.name}</h4>
                    <p style={{ fontSize: 20 }}>{item.price[0]}</p>
                </div>
                <p style={{ fontSize: 20, marginBottom: 35 }}>{item.description}</p>

            </div>
        );
    });
    const displayKidsBaskets = kidsBaskets.map((item, index) => {
        return (
            <div style={{ marginLeft: 50 }} key={index}>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <h4 style={{ fontSize: 25, marginBottom: 10 }}>{item.name}</h4>
                    <p style={{ fontSize: 20 }}>{item.price[0]}</p>
                </div>
                <p style={{ fontSize: 20, marginBottom: 35 }}>{item.description}</p>

            </div>
        );
    });
    const displayDessertsSpecials = dessertsSpecials.map((item, index) => {
        return (
            <div style={{ marginLeft: 50 }} key={index}>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <h4 style={{ fontSize: 25, marginBottom: 10 }}>{item.name}</h4>
                    <p style={{ fontSize: 20 }}>{item.price[0]}</p>
                </div>
                <p style={{ fontSize: 20, marginBottom: 35 }}>{item.description}</p>

            </div>
        );
    });

    return (
        <div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: 96, marginBottom: 96 }}>
                <h2 id="vittles" style={{ fontSize: 50, textAlign: "center" }}>VITTLES</h2>
                <img src={require("../assets/arrow.png")} style={{ height: 100, width: "25%", marginTop: -65, padding: 0 }} />
            </div>
            <div style={{ marginLeft: 50, marginRight: 50 }}>
                <h4 style={{ fontSize: 35, marginBottom: 50, marginTop: 50 }}>NIBBLES</h4>
                {displayNibbles}
                <h4 style={{ fontSize: 35, marginBottom: 50, marginTop: 50 }}>KIDS BASKETS</h4>
                {displayKidsBaskets}
                <h4 style={{ fontSize: 35, marginBottom: 50, marginTop: 50 }}>DESSERTS AND SPECIALS</h4>
                {displayDessertsSpecials}
            </div>
        </div>
    );
};

export default Vittles; 