import axios from "axios";
import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {Navigate} from "react-router-dom";
import {Link} from "react-router-dom";
import {bindActionCreators} from "redux";
import {actionCreators} from "../redux/actionCreatorExport.js";

import "../SASS/components/_home.scss";

const Home = () => {
    const user = useSelector((state) => state.user);
    
    const [ingredient, setIngredient] = useState("");

    const handleChange = (event) => {
        setIngredient(event.target.value);
        console.log(event.target.value);
    };

    const generateCocktail = (event) => {
        event.preventDefault();

        if(!event.target.value) {
            console.log("No value input");
        } else {
            axios
                .get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`)
                .then((res) => {
                    console.log(res.data);
                    
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }

    return ( 
        <div id="home">
            <div id="welcome-box">
                <h1>Let's make a drink</h1>
                <div id="form-container">
                    <form id="ingredient-form" onSubmit={generateCocktail}>
                        <label id="ingredient-label">
                            <input id="ingredient-input" type="text" placeholder="Enter a drink name" onChange={handleChange}/>
                        </label>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Home;