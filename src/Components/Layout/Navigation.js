import React, { useEffect } from "react";
import { siteTitle } from "../../Config/constants";
import "../../CSS/Navigation.css";

const Navigation = () => {

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
   }, [])
    return (

        <header className="header">

            <h1 className="site-title">{siteTitle}</h1>

            <nav className="main-nav">
                <ul className="main-nav-list">
                    <li>
                        <a href="#" className="main-nav-link">HOME</a>
                    </li>
                    <li>
                        <a href="#about" className="main-nav-link">ABOUT</a>
                    </li>
                    <li>
                        <a href="#brews" className="main-nav-link">BREWS</a>
                    </li>
                    <li>
                        <a href="#vittles" className="main-nav-link">VITTLES</a>
                    </li>
                    <li>
                        <a href="#events" className="main-nav-link">EVENTS</a>
                    </li>
                </ul>
            </nav>

            <button className="btn-mobile-nav">
                <ion-icon className="icon-mobile-nav" name="menu-outline"></ion-icon>
                <ion-icon className="icon-mobile-nav" name="close-outline"></ion-icon>
            </button>
        </header>

    );
};

export default Navigation;