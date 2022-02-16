import React from "react";
import CocktailResults from "./CocktailResults";

import "../SASS/components/_cocktailsearch.scss";

const CocktailSearch = (props) => {

    const handleChange = (event) => {
        props.handleSearchInput(event.target.value);
    };

    return (
        <section className="visible">
            <div id="form-container">
                <h1 id="form-header">Let's make a drink</h1>
                <form id="ingredient-form" onSubmit={props.generateCocktail}>
                    <label id="ingredient-label">
                        <input id="ingredient-input" type="text" placeholder="Enter a drink name" onChange={handleChange}/>
                        <span id="search-button-container">
                            <button id="search-button">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <circle cx="10" cy="10" r="7"></circle>
                                    <line x1="21" y1="21" x2="15" y2="15"></line>
                                </svg>
                            </button>
                        </span>
                    </label>
                </form>
            </div>
        </section>
    )
}

export default CocktailSearch