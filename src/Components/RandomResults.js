import React, {useEffect, useState, Suspense} from "react";
import axios from "axios";
import SyncLoader from "react-spinners/SyncLoader";
import ClipLoader from "react-spinners/ClipLoader";

import "../SASS/components/_cocktailspage.scss";

const CocktailResults = React.lazy(() => import("./CocktailResults.js"));

const RandomResults = () => {

    const [status, setStatus] = useState(false);
    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [measurements, setMeasurements] = useState([]);
    const [instructions, setInstructions] = useState("");
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");

    async function randomCocktail () {
        setStatus("hidden");
        setLoading(true);

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
                setLoading(false);
                setStatus("not-hidden");
            }, 1500);
        })
    }

    useEffect(() => {
        randomCocktail();
    }, []) 

    

    return (
        <div id="cocktails-page">
            <h2 className="subheaders">Feeling lucky? Here's a random cocktail.</h2>
            <div id="random-box">
                <button onClick={randomCocktail}>
                    Generate
                </button>
                <div id="random-cocktails-info">
                    <SyncLoader color={color} loading={loading} width={300} height={10} margin={5} />
                    <Suspense fallback={<div>Loading</div>}>
                        <CocktailResults
                            drinkName={drink}
                            onExit={handleIsSearched} 
                        />
                    </Suspense>
                </div>
            </div>
        </div>
    )
}

export default RandomResults;
