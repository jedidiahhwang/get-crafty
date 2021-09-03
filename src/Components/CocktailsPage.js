import React, {useEffect, useState} from "react";
import axios from "axios";

import "../SASS/_cocktailspage.scss";

const CocktailsPage = () => {

    const [drink, setDrink] = useState("");
    const [name, setName] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [measurements, setMeasurements] = useState([]);
    const [instructions, setInstructions] = useState("");

    useEffect(() => {
        axios({
            url: "https://www.thecocktaildb.com/api/json/v1/1/random.php",
            method: "GET"
        }).then(res => {
            /* 
                Assign the data to variables for easier access (individual things to render):
                    - drinkImage stores the image string in preview format.
                    - drinkName stores the name of the drink.
                    - drinkObject stores the whole drink to iterate upon for ingredients.
            */
            const drinkImage = `${res.data.drinks[0].strDrinkThumb}/preview`;
            const drinkName = `${res.data.drinks[0].strDrink}`;
            const drinkObject = res.data.drinks[0];
            console.log(drinkObject);

            // Initialize an empty array to push ingredients to. You can then .map() and render.
            const drinkIngredients = [];
            const drinkMeasurements = [];
            for(let prop in drinkObject) {
                if(prop.startsWith("strIngredient") && drinkObject[prop]) {
                    drinkIngredients.push(drinkObject[prop]);
                } else if(prop.startsWith("strMeasure") && drinkObject[prop]) {
                    drinkMeasurements.push(drinkObject[prop]);
                }
                if(prop === "strInstructions") {
                    setInstructions(drinkObject[prop]);
                }
            }

            // Assign hooks
            setDrink(drinkImage);
            setName(drinkName);
            setIngredients(drinkIngredients);
            setMeasurements(drinkMeasurements);
        })
    }, []) 

    return (
        <div id="cocktails-page">
            <h2>Feeling lucky? Here's a random cocktail.</h2>
            <div id="random-box">
                <h4>{name}</h4>
                <img
                    id="cocktail-image"
                    src={drink}
                    alt="Random photo from CocktailDB"
                />
                <section id="drink-info-box">
                    <section>
                        {ingredients.length > 0 ?
                            ingredients.map(function(element, index) {
                                return <p key={index}>{element}</p>
                            })
                        : null}
                    </section>
                    <section>
                        {measurements.length > 0 ?
                            measurements.map(function(element, index) {
                                return <p key={index}>{element}</p>
                            })
                        : null}
                    </section>
                    <section>
                        <p>{instructions}</p>
                    </section>
                </section>
            </div>
        </div>
    )
}

export default CocktailsPage;
