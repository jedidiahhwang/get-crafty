import React from "react";
import {Link} from "react-router-dom";

import "../SASS/components/_footer.scss";
import logo from "../images/icons/icons8-glass-of-whiskey-50.png";

const Footer = () => {

    return (
        <div id="footer">
            <div id="logo-holder">
                <img src={logo} alt="Get Crafty icon" id="logo-image"/>
            </div>
            <section id="about-section">
                <h3>About</h3>
                <section id="about-links">
                    <a href="https://www.jeddyhwang.com" target="_blank">Creator</a>
                    <a href="https://www.instagram.com/hakka_productions/" target="_blank">Photos</a>
                </section>
            </section>
            <section id="contact-section">
                <h3>Contact</h3>
                <section id="contact-links">
                    <a href="https://github.com/jedidiahhwang" target="_blank">GitHub</a>
                    <a href="https://www.linkedin.com/in/jedidiah-hwang/" target="_blank">LinkedIn</a>
                </section>
            </section>
        </div>
    )
}

export default Footer