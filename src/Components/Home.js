import axios from "axios";
import React, {useState, Suspense} from "react";
import {useSelector, useDispatch} from "react-redux";
import {Navigate} from "react-router-dom";
import {Link} from "react-router-dom";
import {bindActionCreators} from "redux";
import {actionCreators} from "../redux/actionCreatorExport.js";
import ClipLoader from "react-spinners/ClipLoader";

import SearchResults from "./SearchResults.js";

import "../SASS/components/_home.scss";

const Home = (props) => {
    const user = useSelector((state) => state.user);
    
    const [drink, setDrink] = useState("");
    const [apiData, setApiData] = useState();
    const [isSearched, setIsSearched] = useState(false);
    const [status, setStatus] = useState("hidden");
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");

    const handleChange = (event) => {
        setDrink(event.target.value);
        console.log(event.target.value);
    };

    const generateCocktail = (event) => {
        event.preventDefault();

        if(!drink) {
            console.log("No value input");
        } else {
            axios
                .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
                .then((res) => {
                    setApiData(res.data);
                    setIsSearched(true);

                    const timer = setTimeout(() => {
                        console.log("Rendered information after 3 seconds");
                        setLoading(false);
                        setStatus("not-hidden");
                    }, 1500);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    };

    const handleIsSearched = (search) => {
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
                        <ClipLoader color={color} loading={loading} width={300} height={10} margin={5} />
                            <Suspense fallback={<div>Loading</div>}>
                                <SearchResults drink={drink} apiData={apiData} onExit={handleIsSearched} status={status}/>
                            </Suspense>
                    </>
                }   
            </div>
        </div>
    )
}

export default Home;