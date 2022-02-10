import React from "react";
import CocktailResults from "./CocktailResults";

const CocktailSearch = (props) => {

    const handleChange = (event) => {
        props.handleSearchInput(event.target.value);
    };

    return (
        <section className={props.className}>
            <div id="form-container">
                <h1 id="form-header">Let's make a drink</h1>
                <form id="ingredient-form" onSubmit={props.generateCocktail}>
                    <label id="ingredient-label">
                        <input id="ingredient-input" type="text" placeholder="Enter a drink name" onChange={handleChange}/>
                    </label>
                </form>
            </div>
        </section>
    )
}

export default CocktailSearch