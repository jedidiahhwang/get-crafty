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
                <h1>Welcome to Get Crafty</h1>
                <h3>Your personal bartender</h3>
            </div>
            <div id="steps-container">
                <section className="steps-boxes">
                    <h2>Step 1</h2>
                    <p>Select your base liquor</p>
                </section>
                <section className="steps-boxes">
                    <h2>Step 2</h2>
                    <p>Add additional flavoring and ingredients</p>
                </section>
                <section className="steps-boxes">
                    <h2>Step 3</h2>
                    <p>Generate your list of cocktails</p>
                </section>
            </div>
            <button className="borderman btn-border">Get Started</button>
        </div>
    )
}

export default HomePage;