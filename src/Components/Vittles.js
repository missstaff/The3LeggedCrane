import React, { useEffect, useState } from "react";
import SectionHeader from "./Layout/SectionHeader";
import { getMenu } from "../Utility/Utility";
import { useClosestMedia } from "../hooks/useClosestMedia";
import { useMediaQuery } from "../hooks/useMediaQuery";
import "../CSS/Vittles.css"

import { MENU } from "../data";


const Vittles = () => {

    const closestMedia = useClosestMedia({
        queries: ["xs", "sm", "md", "lg", "xl", "2xl"],
    });

    const isLargeScreen = useMediaQuery("lg");
    const isMediumScreen = useMediaQuery("md");
    const isSmallScreen = useMediaQuery("sm");
    const isExtraSmallScreen = useMediaQuery("xs");

    const [dessertsSpecials, setDessertsSpecials] = useState([]);
    const [kidsBaskets, setKidsBaskets] = useState([]);
    const [nibbles, setNibbles] = useState([]);


    const [fontSize, setFontSize] = useState("16px");

    useEffect(() => {
        if (isLargeScreen) {
            setFontSize("24px");
        } else if (isMediumScreen) {
            setFontSize("20px");
        } else if (isSmallScreen) {
            setFontSize("18px");
        } else if (isExtraSmallScreen) {
            setFontSize("16px");
        }
    }, [isLargeScreen, isMediumScreen, isSmallScreen, isExtraSmallScreen]);


    useEffect(() => {

        if (!dessertsSpecials.length) {
            getMenu(MENU, setDessertsSpecials, "desserts/specials");
        }
    }, [dessertsSpecials.length]);


    useEffect(() => {
        if (!kidsBaskets.length) {
            getMenu(MENU, setKidsBaskets, "kids");
        }
    }, [kidsBaskets.length]);


    useEffect(() => {
        if (!nibbles.length) {
            getMenu(MENU, setNibbles, "nibbles");
        }
    }, [nibbles.length]);



    const displayNibbles = nibbles.map((item, index) => {
        return (
            <div style={{ marginLeft: "10%" }} key={index}>
                <h4 className="vittle-title">{item.name}</h4>
                <div className="vittles-description-container ">
                    <p className="vittles-description" style={{fontSize: fontSize,  padding: 5 }}>{item.description}</p>
                    {item.price.length > 1 ?
                        (<div>

                            <div style={{ flexDirection: "column", alignItems: "flex-end" }}>
                                <div style={{ alignItems: "flex-end", display: "flex", flexDirection: "row", justifyContent: "flex-end" }}>
                                    <p className="vittles-price" style={{ fontSize: fontSize, padding: 5 }}>{item.size[0]}</p>
                                    <p className="vittles-price" style={{ fontSize: fontSize, padding: 5 }}>{item.price[0].toFixed(2)}</p>
                                </div>

                                <div style={{ alignItems: "flex-end", display: "flex", flexDirection: "row", justifyContent: "flex-end" }}>
                                    <p className="vittles-price" style={{ fontSize: fontSize, padding: 5 }}>{item.size[1]}</p>
                                    <p className="vittles-price" style={{ fontSize: fontSize, padding: 5 }}>{item.price[1].toFixed(2)}</p>
                                </div>

                            </div>
                        </div>)
                        :
                        (<div style={{alignItems: "flex-end", display: "flex", flexDirection: "row", justifyContent: "flex-end"}}><p className="vittles-price" style={{ fontSize: fontSize, padding: 5 }}>{item.price[0].toFixed(2)}</p></div>)
                    }
                </div>
            </div>
        );
    });


    const displayKidsBaskets = kidsBaskets.map((item, index) => {
        return (
            <div style={{ marginLeft: "10%" }}  key={index}>
                <h4 className="vittle-title">{item.name}</h4>
                <div className="vittles-description-container">
                    <p className="vittles-description"  style={{ fontSize: fontSize, padding: 5}}>{item.description}</p>
                    <div style={{alignItems: "flex-end", display: "flex", flexDirection: "row", justifyContent: "flex-end"}}><p className="vittles-price"  style={{ fontSize: fontSize, padding: 5  }}>{item.price[0].toFixed(2)}</p></div>
                </div>
            </div>
        );
    });


    const displayDessertsSpecials = dessertsSpecials.map((item, index) => {
        return (
            <div style={{ marginLeft: "10%" }} key={index}>
                <h4 className="vittle-title">{item.name}</h4>
                <div className="vittles-description-container">
                    <p className="vittles-description" style={{ fontSize: fontSize, padding: 5  }}>{item.description}</p>
                    <div style={{alignItems: "flex-end", display: "flex", flexDirection: "row", justifyContent: "flex-end"}}>
                    <p className="vittles-price" style={{ fontSize: fontSize, padding: 5  }}>{item.price[0]}</p>
                    </div>
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