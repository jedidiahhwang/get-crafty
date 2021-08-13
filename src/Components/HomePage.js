import React from "react";

import "../SASS/_homepage.scss";
import backgroundImage from "../images/bar-background.jpeg";

const HomePage = () => {

    return ( 
        <div id="home-page">
                <img
                    id="background-image"
                    src={backgroundImage}
                    alt="Bar photo from Unsplash"
                />
                <div id="welcome-box">
                    <h1>- Welcome to Get Crafty -</h1>
                    <h3>Your personal bartender</h3>
                </div>
                <div id="directions-container">
                    <p className="intro-text">
                        Get Crafty is a tool built to solve your cocktail craving needs.<br></br>
                        Simply select a base liquor as well as any additional ingredients<br></br>
                        and Get Crafty will generate a list of potential drinks to make!<br></br>
                    </p>
                </div>
                <div class="pos down-arrow"></div>
        </div>
    )
}

export default HomePage;