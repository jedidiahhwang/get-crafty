import React, {useEffect, useState} from "react";

import "../SASS/components/_randomcocktails.scss";

const CocktailResults = (props) => {

    console.log(props.data);

    const handleChange = (event) => {
        props.onExit();
    };

    return (
        <div id={props.status}>
            {/* <section id="drink-info-box">
            <h4>{props.name}</h4>
            <img
                id="cocktail-image"
                src={props.image}
                alt="Random photo from CocktailDB"
            />
                <section id="ingredients-box">
                    <h3 className="drink-info-headers">Ingredients</h3>
                    {props.ingredients.length > 0 ? 
                        props.ingredients.map(function(element, index) {
        
                            return <p key={index}>{element}</p>
                        })
                    : null}
                </section>
                <section id="measurements-box">
                    <h3 className="drink-info-headers">Measurements</h3>
                    {props.measurements.length > 0 ?
                        props.measurements.map(function(element, index) {
                            return <p key={index}>{element}</p>
                        })
                    : null}
                </section>
                <section id="instructions-box">
                    <p>{props.instructions}</p>
                </section>
                <button onClick={handleChange}>Back</button>
            </section> */}
        </div>
    )
}

export default CocktailResults;