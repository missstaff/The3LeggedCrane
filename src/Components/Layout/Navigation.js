import React, { useEffect, useState } from "react";
import { FaGripLines } from "react-icons/fa";
import { useClosestMedia } from "../../hooks/useClosestMedia";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { siteTitle } from "../../Config/constants";
import "../../CSS/Navigation.css";


const Navigation = () => {

    const closestMedia = useClosestMedia({
        queries: ["xs", "sm", "md", "lg", "xl", "2xl"],
    });

    const isLargeScreen = useMediaQuery("lg");
    const isMediumScreen = useMediaQuery("md");
    const isSmallScreen = useMediaQuery("sm");
    const isExtraSmallScreen = useMediaQuery("xs");

    const [isMenuVisible, setIsMenuVisible] = useState(false);

    useEffect(() => {
        const sectionHeroEl = document.querySelector(".slide-container");
        const observer = new IntersectionObserver(function (entries) {
            const ent = entries[0];
            if (!ent.isIntersecting) {
                document.body.classList.add("sticky");
            }
            if (ent.isIntersecting) {
                document.body.classList.remove("sticky");
            }
        }, {
            //in the viewport
            root: null,
            threshold: 0,
        })
        observer.observe(sectionHeroEl)
    }, []);


    const handleMobileNavClick = () => {
        setIsMenuVisible(!isMenuVisible);
    };


    return (
        <header className={`header ${isMenuVisible ? "nav-open" : ""}  `} style={{ zIndex: 9999 }}>
            <h1 id="home" className="site-title">{siteTitle}</h1>
            <nav className={`main-nav ${isMenuVisible ? "mobile-nav-visible" : ""}`}>
                <ul className="main-nav-list">
                    <li>
                        <a onClick={handleMobileNavClick} href="#home" className="main-nav-link">HOME</a>
                    </li>
                    <li>
                        <a onClick={handleMobileNavClick} href="#about" className="main-nav-link">ABOUT</a>
                    </li>
                    <li>
                        <a onClick={handleMobileNavClick} href="#brews" className="main-nav-link">BREWS</a>
                    </li>
                    <li>
                        <a onClick={handleMobileNavClick} href="#vittles" className="main-nav-link">VITTLES</a>
                    </li>
                    <li>
                        <a onClick={handleMobileNavClick} href="#events" className="main-nav-link">EVENTS</a>
                    </li>
                </ul>
            </nav>
            
            <button className="btn-mobile-nav" onClick={handleMobileNavClick}>
                <a className="icon-mobile-nav" name="menu-outline"><FaGripLines size={isSmallScreen || isExtraSmallScreen ? 25 : 50} color="orange" /></a>
                <a className="icon-mobile-nav" name="close-outline"><FaGripLines size={isSmallScreen || isExtraSmallScreen ? 25 : 50} color="orange" /></a>
            </button>
        </header>
    );
};


export default Navigation;
