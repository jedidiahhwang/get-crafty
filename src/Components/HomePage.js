import React from "react";

import "../SASS/_homepage.scss";
import backgroundImage from "../images/cocktail1.jpg";

const HomePage = () => {

    return ( 
        <div id="home-page">
                <div id="welcome-box">
                    <h1>- Welcome to Get Crafty -</h1>
                    <h3>Your personal bartender</h3>
                </div>
                <div id="buttons-container">
                    <button class="reflective">Login</button>
                    <button class="reflective">Register</button>
                </div>
        </div>
    )
}

export default HomePage;