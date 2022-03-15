/*
    Refer to the following link for guide: https://upmostly.com/tutorials/modal-components-react-custom-hooks
    Refer to the following link for extra reading on ReactDOM.createPortal(): https://www.freecodecamp.org/news/how-to-render-modals-in-react-bbe9685e947e/

    This is the actual modal that gets rendered. Using ReactDOM.createPortal(), we can render this modal
    outside of its parent component, which helps with styling and accessibility.
*/

import React from "react";
import ReactDOM from "react-dom";

import "../../SASS/components/_addDrinkModal.scss";

const AddDrinkModal = ({isShowing, toggle}) => {

    if(isShowing) {
        return (
            ReactDOM.createPortal(
                <>
                    <div className="modal">
                        <div className="modal-content">
                            <h4 className="modal-title">How Do You Want to Make Your Drink?</h4>
                            <div className="modal-body">
                                <button className="about-buttons" id="about-random-button">Random Drinks</button>
                                <button className="about-buttons" id="about-ingredients-button">Search Drinks</button>
                                <button className="about-buttons" id="about-ingredients-button">List Ingredients</button>
                            </div>
                            <div className="modal-footer">
                                <button className="button" onClick={toggle}>
                                    <span>&times;</span>
                                </button>
                            </div>
                        </div>
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