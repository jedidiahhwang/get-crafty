import { set } from "mongoose";
import React, {useEffect, useState} from "react";

import "../SASS/components/_randomcocktails.scss";

const CocktailResults = (props) => {
    // Hook to set the state of the current drink object from the API.
    // Proceed to assign the hook from props.
    const [drinkObject, setDrinkObject] = useState({}); 

    // Hooks to store state of the drink properties from the API.
    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [measurements, setMeasurements] = useState([]);
    const [instructions, setInstructions] = useState("");

    // Use a useEffect() method to assign hooks. This prevents infinite renders and assigns hooks on render.
    useEffect(() => {
        console.log(props.data);
        setImage(`${props.data.strDrinkThumb}/preview`);
        setName(props.data.strDrink);
        const drinkIngredients = [];
        const drinkMeasurements = [];
        for(let prop in drinkObject) {
            if(prop.startsWith("strIngredient") && drinkObject[prop]) {
                drinkIngredients.push(props.data[prop]);
            } else if(prop.startsWith("strMeasure") && drinkObject[prop]) {
                drinkMeasurements.push(props.data[prop]);
            }
            if(prop === "strInstructions") {
                // Since the instructions are one big string, assign it once in the for loop.
                setInstructions(props.data[prop]);
            }
        }

        // Since the ingredients are an array, assign a preexisting array the values, then use hooks outside of for loop.
        setIngredients(drinkIngredients);
    }, []);

    const handleChange = (event) => {
        props.onExit();
    };

    return (
        <div>
            <section id="drink-info-box">
                <h4>{name}</h4>
                <img
                    id="cocktail-image"
                    src={image}
                    alt="Random photo from CocktailDB"
                />
                <section id="ingredients-box">
                    <h3 className="drink-info-headers">Ingredients</h3>
                    {ingredients.length > 0 ? 
                        ingredients.map(function(element, index) {
                            return <p key={index}>{element}</p>
                        })
                    : null}
                </section>
                <section id="measurements-box">
                    <h3 className="drink-info-headers">Measurements</h3>
                    {measurements.length > 0 ?
                        measurements.map(function(element, index) {
                            return <p key={index}>{element}</p>
                        })
                    : null}
                </section>
                <section id="instructions-box">
                    <p>{props.instructions}</p>
                </section>
                <button onClick={handleChange}>Back</button>
            </section>
        </div>
    )
}

export default CocktailResults;