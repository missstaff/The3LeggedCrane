import React from "react";
import "../../CSS/General.css";
import "../../CSS/Navigation.css";


const Navigation = () => {
    return (

        <header className="header">

            <h1 style={{ fontSize: 50 }}>The 3 Legged Crane</h1>

            <nav className="main-nav">
                <ul className="main-nav-list">
                    <li>
                        <a href="#home" className="main-nav-link">HOME</a>
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