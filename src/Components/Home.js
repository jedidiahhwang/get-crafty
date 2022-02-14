import axios from "axios";
import React, {useState, Suspense, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {Navigate} from "react-router-dom";
import {Link} from "react-router-dom";
import {bindActionCreators} from "redux";
import {actionCreators} from "../redux/actionCreatorExport.js";
import ClipLoader from "react-spinners/ClipLoader";

import CocktailSearch from "./CocktailSearch.js";
import CocktailResults from "./CocktailResults.js";

import "../SASS/components/_home.scss";

const Home = (props) => {
    const user = useSelector((state) => state.user);

    // Hook for grabbing the user input on the search bar. This state is passed to CocktailSearch.
    const [drink, setDrink] = useState("");

    // Hook for grabbing the API data. This hook will be passed into the CocktailResults component.
    const [data, setData] = useState({});

    // Hooks for rendering the CocktailResult component based on whether it's "hidden" or not, and whether something has been searched.
    const [status, setStatus] = useState("hidden");
    const [isSearched, setIsSearched] = useState(false);

    // Hooks for the loader.
    let [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log(data);
    }, [data])

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

                    setData(res.data.drinks[0]);
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

    const handleSearchInput = (value) => {
        setDrink(value);
    };

    let cocktailSearchStatus = "cocktail-search not-hidden";
    if(!isSearched) {
        cocktailSearchStatus = "cocktail-search hidden";
    } else {
        cocktailSearchStatus = "cocktail-search not-hidden";
    }

    return ( 
        <div id="home">
            <div id="welcome-box">
                {!isSearched ? 
                    <CocktailSearch
                        className={cocktailSearchStatus}
                        generateCocktail={generateCocktail}
                        handleSearchInput={handleSearchInput}
                    />
                : 
                    <>
                        {Object.keys(data).length > 0 ?
                            <CocktailResults
                                data={data}
                                status={status}
                                onExit={handleIsSearched} 
                            />
                        : null
                        }
                    </>
                }   
            </div>
        </div>
    )
}

export default Home;