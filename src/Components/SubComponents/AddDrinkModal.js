/*
    Refer to the following link for guide: https://upmostly.com/tutorials/modal-components-react-custom-hooks
    Refer to the following link for extra reading on ReactDOM.createPortal(): https://www.freecodecamp.org/news/how-to-render-modals-in-react-bbe9685e947e/

    This is the actual modal that gets rendered. Using ReactDOM.createPortal(), we can render this modal
    outside of its parent component, which helps with styling and accessibility.
*/

import React, {useState} from "react";
import ReactDOM from "react-dom";

import CocktailResults from "../CocktailResults.js";

import "../../SASS/components/_addDrinkModal.scss";

const AddDrinkModal = ({isShowing, toggle}) => {
    const [selectionState, setSelectionState] = useState("");

    const handleClick = (event) => {
        event.preventDefault();
        console.log("Click hit")
        console.log(event.target);

        switch (event.target.id) {
            case "random-button":
                console.log("selectionState is random");
                setSelectionState("random");
                break;
            case "search-button":
                console.log("selectionState is search");
                setSelectionState("search");
                break;
            case "ingredients-button":
                console.log("selectionState is ingredients");
                setSelectionState("ingredients");
                break;
            case "exit-button":
                console.log("selectionState is empty");
                setSelectionState("");
                toggle();
                break;
        };
    }


    if(isShowing) {
        return (
            ReactDOM.createPortal(
                <>
                    <div className="modal">
                        {
                            selectionState === "random" ? 
                            <CocktailResults />
                            :
                            <div className="modal-content">
                                <h4 className="modal-title">How Do You Want to Make Your Drink?</h4>
                                <div className="modal-body">
                                    <button className="about-buttons" id="random-button" onClick={handleClick}>Random Drinks</button>
                                    <button className="about-buttons" id="search-button" onClick={handleClick}>Search Drinks</button>
                                    <button className="about-buttons" id="ingredients-button" onClick={handleClick}>List Ingredients</button>
                                </div>
                            </div>
                        }
                        <button className="button" id="exit-button" onClick={handleClick}>
                            x
                        </button>
                    </div>
                </>, document.body
            )
        )
    } else {
        return (
            null
        );
    }
}

export default AddDrinkModal