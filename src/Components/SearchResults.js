import React from "react";

const SearchResults = (props) => {

    const handleChange = (event) => {
        props.onExit();
    }

    return (
        <div>
            <h1>You entered {props.drink}</h1>
            <h1>Your data {props.apiData.drinks[0].strDrink}</h1>
            <button onClick={handleChange}>Back</button>
        </div>
    )
}

export default SearchResults