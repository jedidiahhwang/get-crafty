import React, {useEffect, useState} from "react";
import axios from "axios";

import "../SASS/components/_cocktailresults.scss";

const CocktailResults = (props) => {
    // Hooks to store state of the drink properties from the API.
    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [measurements, setMeasurements] = useState([]);
    const [instructions, setInstructions] = useState("");
    const [status, setStatus] = useState(false);

    // Use a useEffect() method to assign hooks. This prevents infinite renders and assigns hooks on render.
    useEffect(() => {
        console.log(props.drinkName);
        axios
            .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${props.drinkName}`)
            .then((res) => {
                console.log("Data received.");

                setName(res.data.drinks[0].strDrink);
                setImage(`${res.data.drinks[0].strDrinkThumb}/preview`);
                const drinkIngredients = [];
                const drinkMeasurements = [];
                for(let prop in props.data) {
                    if(prop.startsWith("strIngredient") && res.data.drinks[0][prop]) {
                        drinkIngredients.push(res.data.drinks[0][prop]);
                    } else if(prop.startsWith("strMeasure") && res.data.drinks[0][prop]) {
                        drinkMeasurements.push(res.data.drinks[0][prop]);
                    }
                    if(prop === "strInstructions") {
                        // Since the instructions are one big string, assign it once in the for loop.
                        setInstructions(res.data.drinks[0][prop]);
                    }
                }

                setIngredients(drinkIngredients);
                setMeasurements(drinkMeasurements);
            })
            .catch((err) => {
                console.log(err);
            });
            // setLoading(false);
        setTimeout(() => {
            setStatus(true);
        }, 1500)
    }, []);

    const handleChange = () => {
        props.onExit();
    };

    return (
        <div id="cocktail-result">
            <section id="drink-info-box">
                {status ? 
                <>
                    <h4 id="drink-name">{name}</h4>
                    <img
                        id="cocktail-image"
                        src={image}
                        alt="Random photo from CocktailDB"
                    />
                </>
                : null}

                <section id="ingredients-box">
                <h4 className="drink-results-subheader">Ingredients</h4>
                    {ingredients.length > 0 ? 
                        ingredients.map(function(element, index) {
                            return <p id="ingredients-text" className="long-text" key={index}>{element}</p>
                        })
                    : null}
                </section>
                {/* <section id="measurements-box">
                <h4 className="drink-results-subheader">Measurements</h4>
                    {measurements.length > 0 ?
                        measurements.map(function(element, index) {
                            return <p id="measurements-text" className="long-text" key={index}>{element}</p>
                        })
                    : null}
                </section>
                <section id="instructions-box">
                    <p id="instructions-text" className="long-text">{instructions}</p>
                </section> */}
                <button onClick={handleChange}>Back</button>
            </section>
        </div>
    )
}

export default CocktailResults;