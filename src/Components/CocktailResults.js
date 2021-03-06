import React, {useEffect, useState, Suspense} from "react";
import axios from "axios";
import {useSelector, useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from "../redux/actionCreatorExport.js";

import "../SASS/components/_cocktailresults.scss";
import loadingGif from "../images/pouring.gif";

const CocktailResults = (props) => {
    // Hooks to store state of the drink properties from the API.
    const [data, setData] = useState(); // Using this hook to conditionally render CocktailResults
    const [idDrink, setIdDrink] = useState();
    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [measurements, setMeasurements] = useState([]);
    const [instructions, setInstructions] = useState("");

    // Hook to manage when the component will be rendered. This is to account for the picture loading slower.
    const [status, setStatus] = useState("none");

    const user = useSelector((state) => state.user);

    // Use a useEffect() method to send API request and assign hooks.
    useEffect(() => {
        if(props.drinkName) {
            axios
            .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${props.drinkName}`)
            .then((res) => {
                console.log("Data received.");

                setData(res.data);
                setIdDrink(res.data.drinks[0].idDrink)
                setName(res.data.drinks[0].strDrink);
                setImage(`${res.data.drinks[0].strDrinkThumb}/preview`);
                const drinkIngredients = [];
                const drinkMeasurements = [];
                for(let prop in res.data.drinks[0]) {
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

                setTimeout(() => {
                    setStatus("inline");
                    console.log("Image displayed.");
                }, 1000)
            })
            .catch((err) => {
                console.log(err);
            });
        } else {
            axios
            .get(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
            .then((res) => {
                console.log("Data received.");

                setData(res.data);
                setIdDrink(res.data.drinks[0].idDrink)
                setName(res.data.drinks[0].strDrink);
                setImage(`${res.data.drinks[0].strDrinkThumb}/preview`);
                const drinkIngredients = [];
                const drinkMeasurements = [];
                for(let prop in res.data.drinks[0]) {
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

                setTimeout(() => {
                    setStatus("inline");
                    console.log("Image displayed.");
                }, 1000)
            })
            .catch((err) => {
                console.log(err);
            });
        }
    }, []);

    const handleChange = () => {
        props.onExit();
    };

    
    const addDrink = () => {
        if(user.email) {
            const drinkObj = {
                idDrink,
                name,
                ingredients,
                instructions,
                image
            };
            
            axios.post("/drinks/recipe", drinkObj)
            .then((res) => {
                console.log(res.data);
                props.setUser(res.data);
                console.log("Drink successfully added");
            })
            .catch((err) => {
                console.log(err);
                console.log(err.response);
            });
        } else {
            alert("You must be logged in to save drinks");
        }
    }

    return (
        <div id="cocktail-result-container">
            {data ? 
            <section id="cocktail-result">
                <h4 id="drink-name">{name}</h4>
                {
                    status === "none" ?
                    <img
                        id="loading-gif"
                        src={loadingGif}
                        alt="loading gif"
                    />
                    :
                    <img
                        id="cocktail-image"
                        src={image}
                        alt="random image"
                        style={{display: status}}
                    />
                }
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
                <button onClick={addDrink}>Add Drink</button>
            </section>
            : null}
        </div>
    )
}

export default CocktailResults;