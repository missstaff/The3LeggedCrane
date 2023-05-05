import React, { useEffect, useState } from "react";
import "../CSS/Vittles.css"

import { MENU } from "../data";
import SectionHeader from "./Layout/SectionHeader";


const Vittles = () => {

    const [dessertsSpecials, setDessertsSpecials] = useState([]);
    const [kidsBaskets, setKidsBaskets] = useState([]);
    const [nibbles, setNibbles] = useState([]);


    useEffect(() => {

        if (!dessertsSpecials.length) {
            const items = [];
            const filteredItems = MENU.filter((item) => item.type === "desserts/specials");
            items.push(...filteredItems);
            setDessertsSpecials(items);
        }
    }, [dessertsSpecials.length]);


    useEffect(() => {
        if (!kidsBaskets.length) {
            const items = [];
            const filteredItems = MENU.filter((item) => item.type === "kids");
            items.push(...filteredItems);
            setKidsBaskets(items);
        }
    }, [kidsBaskets.length]);


    useEffect(() => {
        if (!nibbles.length) {
            const items = [];
            const filteredItems = MENU.filter((item) => item.type === "nibbles");
            items.push(...filteredItems);
            setNibbles(items);
        }
    }, [nibbles.length]);



    const displayNibbles = nibbles.map((item, index) => {
        return (
            <div style={{ marginLeft: 50 }} key={index}>
                <h4 className="vittle-title">{item.name}</h4>
                <div className="vittles-description-container">
                    <p className="vittles-description">{item.description}</p>
                    <p className="vittles-price">{item.price[0]}</p>
                </div>
            </div>
        );
    });


    const displayKidsBaskets = kidsBaskets.map((item, index) => {
        return (
            <div style={{ marginLeft: 50 }} key={index}>
                <h4 className="vittle-title">{item.name}</h4>
                <div className="vittles-description-container">
                    <p className="vittles-description">{item.description}</p>
                    <p className="vittles-price">{item.price[0]}</p>
                </div>
            </div>
        );
    });


    const displayDessertsSpecials = dessertsSpecials.map((item, index) => {
        return (
            <div style={{ marginLeft: 50 }} key={index}>
                <h4 className="vittle-title">{item.name}</h4>
                <div className="vittles-description-container">
                    <p className="vittles-description">{item.description}</p>
                    <p className="vittles-price">{item.price[0]}</p>
                </div>
            </div>
        );
    });


    return (
        <>
            <SectionHeader id="vittles" heading="VITTLES" styles={{ marginBottom: 96, marginTop: 96 }} />

            <div className="vittles-container">

                <div style={{ marginLeft: 50, marginRight: 50 }}>
                    <h4 className="vittles-header">NIBBLES</h4>
                    {displayNibbles}
                    <h4 className="vittles-header">KIDS BASKETS</h4>
                    {displayKidsBaskets}
                    <h4 className="vittles-header">DESSERTS AND SPECIALS</h4>
                    {displayDessertsSpecials}
                </div>
            </div>
        </>
    );
};


export default Vittles; 