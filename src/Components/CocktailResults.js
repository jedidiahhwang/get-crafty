import React, {useEffect, useState} from "react";

import "../SASS/components/_cocktailresults.scss";

const CocktailResults = (props) => {
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
        for(let prop in props.data) {
            if(prop.startsWith("strIngredient") && props.data[prop]) {
                drinkIngredients.push(props.data[prop]);
            } else if(prop.startsWith("strMeasure") && props.data[prop]) {
                drinkMeasurements.push(props.data[prop]);
            }
            if(prop === "strInstructions") {
                // Since the instructions are one big string, assign it once in the for loop.
                setInstructions(props.data[prop]);
            }
        }

        // Since the ingredients and measurements are an array, assign a preexisting array the values, then use hooks outside of for loop.
        setIngredients(drinkIngredients);
        setMeasurements(drinkMeasurements);
    }, []);

    const handleChange = () => {
        props.onExit();
    };

    return (
        <div id="hidden">
            <section id="drink-info-box">
                <h4 id="drink-name">{name}</h4>
                <img
                    id="cocktail-image"
                    src={image}
                    alt="Random photo from CocktailDB"
                />
                <section id="ingredients-box">
                <h4 className="drink-results-subheader">Ingredients</h4>
                    {ingredients.length > 0 ? 
                        ingredients.map(function(element, index) {
                            return <p id="ingredients-text" className="long-text" key={index}>{element}</p>
                        })
                    : null}
                </section>
                <section id="measurements-box">
                <h4 className="drink-results-subheader">Measurements</h4>
                    {measurements.length > 0 ?
                        measurements.map(function(element, index) {
                            return <p id="measurements-text" className="long-text" key={index}>{element}</p>
                        })
                    : null}
                </section>
                <section id="instructions-box">
                    <p id="instructions-text" className="long-text">{instructions}</p>
                </section>
                <button onClick={handleChange}>Back</button>
            </section>
        </div>
    )
}

export default CocktailResults;