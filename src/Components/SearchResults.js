import React from "react";

const SearchResults = (props) => {

    return (
        <div>
            <h1>You entered {props.drink}</h1>
            <h1>Your data {props.apiData.drinks[0].strDrink}</h1>
        </div>
    )
}

export default SearchResults