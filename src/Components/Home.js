import axios from "axios";
import React, {useState, Suspense} from "react";
import {useSelector, useDispatch} from "react-redux";
import {Navigate} from "react-router-dom";
import {Link} from "react-router-dom";
import {bindActionCreators} from "redux";
import {actionCreators} from "../redux/actionCreatorExport.js";
import ClipLoader from "react-spinners/ClipLoader";

import CocktailResults from "./CocktailResults.js";
import SearchResults from "./SearchResults.js";

import "../SASS/components/_home.scss";

const Home = (props) => {
    const user = useSelector((state) => state.user);

    // Hook for grabbing the user input on the search bar.
    const [drink, setDrink] = useState("");

    // Hook for grabbing the API data. This hook will be passed into the CocktailResults component.
    const [data, setData] = useState();

    // Hooks for rendering the CocktailResult component based on whether it's "hidden" or not, and whether something has been searched.
    const [status, setStatus] = useState("hidden");
    const [isSearched, setIsSearched] = useState(false);

    // Hooks for the loader.
    let [loading, setLoading] = useState(true);

    const handleChange = (event) => {
        setDrink(event.target.value);
        console.log(event.target.value);
    };

    const generateCocktail = (event) => {
        event.preventDefault();

        if(!drink) {
            console.log("No value input");
        } else {
            console.log("Sending request to API.");
            axios
                .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
                .then((res) => {
                    setIsSearched(true);

                    console.log("Data received.");
                    setData(res.data);

                    const timer = setTimeout(() => {
                        setLoading(false);
                        setStatus("not-hidden");
                    }, 3000);
                })
                .catch((err) => {
                    console.log(err);
                });
        };
    };

    const handleIsSearched = (search) => {
        setDrink("");
        setIsSearched(false);
    };

    return ( 
        <div id="home">
            <div id="welcome-box">
                {!isSearched ? 
                    <>
                        <h1>Let's make a drink</h1>
                        <div id="form-container">
                            <form id="ingredient-form" onSubmit={generateCocktail}>
                                <label id="ingredient-label">
                                    <input id="ingredient-input" type="text" placeholder="Enter a drink name" onChange={handleChange}/>
                                </label>
                            </form>
                        </div>
                    </>
                    : 
                    <>
                        <ClipLoader color="#ffffff" loading={loading} width={300} height={10} margin={5} />
                            <Suspense fallback={<div>Loading</div>}>
                                
                            </Suspense>
                    </>
                }   
            </div>
        </div>
    )
}

export default Home;