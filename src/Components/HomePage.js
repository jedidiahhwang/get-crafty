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
                <div class="pos down-arrow"></div>
        </div>
    )
}

export default HomePage;