import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

import "../SASS/components/_aboutpage.scss";
import randomCocktailImage from "../images/icons/icons8-cocktail-60.png";
import ingredientsImage from "../images/icons/icons8-lemon-60.png";
import registerImage from "../images/icons/icons8-arrow-60.png";

const AboutPage = () => {
    let navigate = useNavigate();

    const routeRandomCocktails = () => {
        navigate("/random");
    };

    const routeSearchIngredients = () => {
        navigate("/ingredients");
    };

    const routeRegister = () => {
        navigate("/register")
    };

    return (
        <div id="about-page">
            <h2 id="about-cards-header">
                If you're trying something new, or building a cocktail library, <br></br>
                Get Crafty can help you.
            </h2>
            <div id="about-cards-container">
                <section className="about-card" onClick={routeRandomCocktails}>
                    <h3 className="about-card-header">Create a random cocktail</h3>
                    <img src={randomCocktailImage} alt="Icon for random cocktails card" id="random-cocktail-image" />
                    <div className="about-card-details">
                        <p>
                            Not sure what you want?<br></br>
                            Let us recommend something.
                        </p>
                    </div>
                    <div className="about-card-button-holder">
                        <button className="about-buttons" id="about-random-button">Random Drinks</button>
                    </div>
                </section>
                <section className="about-card" onClick={routeSearchIngredients}>
                    <h3 className="about-card-header">Search using ingredients</h3>
                    <img src={ingredientsImage} alt="Icon for ingredients card" id="ingredients-image" />
                    <div className="about-card-details">
                        <p>
                            Have ingredients on hand?<br></br>
                            See what you can make.
                        </p>
                    </div>
                    <div className="about-card-button-holder">
                        <button className="about-buttons" id="about-ingredients-button">Search Drinks</button>
                    </div>
                </section>
                <section className="about-card" onClick={routeRegister}>
                    <h3 className="about-card-header">Register to save recipes</h3>
                    <img src={registerImage} alt="Icon for register card" id="register-image" />
                    <div className="about-card-details">
                        <p>
                            Want to build your cocktail library?<br></br>
                            Register to start saving recipes.
                        </p>
                    </div>
                    <div className="about-card-button-holder">
                        <button className="about-buttons" id="about-register-button">Save Drinks</button>
                    </div>
                </section>                
            </div>
        </div>
    )
}

export default AboutPage;
