import React, {useEffect, useState, Suspense} from "react";
import axios from "axios";

import "../SASS/_cocktailspage.scss";

const RandomCocktails = React.lazy(() => import("./SubComponents/RandomCocktails.js"));

const CocktailsPage = () => {

    const [status, setStatus] = useState(false);
    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [measurements, setMeasurements] = useState([]);
    const [instructions, setInstructions] = useState("");

    async function randomCocktail () {
        setStatus("hidden");

        await axios({
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
            setImage(drinkImage);
            setName(drinkName);
            setIngredients(drinkIngredients);
            setMeasurements(drinkMeasurements);

            const timer = setTimeout(() => {
                console.log("Rendered information after 3 seconds");
                setStatus("not-hidden");
            }, 3000);
        })
    }

    useEffect(() => {
        randomCocktail();
    }, []) 

    return (
        <div id="cocktails-page">
            <h2>Feeling lucky? Here's a random cocktail.</h2>
            <div id="random-box">
                <button onClick={randomCocktail}>
                    Generate
                </button>
                <Suspense fallback={<div>Loading</div>}>
                    <RandomCocktails
                        image={image}
                        name={name}
                        ingredients={ingredients}
                        measurements={measurements}
                        instructions={instructions}
                        status={status}
                    />
                </Suspense>
            </div>
        </div>
    )
}

export default CocktailsPage;
