/*
    Refer to the following link for guide: https://upmostly.com/tutorials/modal-components-react-custom-hooks
    Refer to the following link for extra reading on ReactDOM.createPortal(): https://www.freecodecamp.org/news/how-to-render-modals-in-react-bbe9685e947e/

    This is the actual modal that gets rendered. Using ReactDOM.createPortal(), we can render this modal
    outside of its parent component, which helps with styling and accessibility.
*/

import React from "react";
import ReactDOM from "react-dom";

import "../../SASS/components/_addDrinkModal.scss";

const AddDrinkModal = ({isShowing, toggle}) => isShowing ? ReactDOM.createPortal(
    <>
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title">How Do You Want to Make Your Drink?</h4>
                </div>
                <div className="modal-body">
                    This is modal content
                </div>
                <div className="modal-footer">
                    <button className="button" onClick={toggle}>
                        <span>&times;</span>
                    </button>
                </div>
            </div>
        </div>
    </>, document.body
) : null;

export default AddDrinkModal